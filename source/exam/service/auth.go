package service

import (
	"exam/conf"

	"exam/lib/strings"
	"exam/model"
)

func (auth *Service) InitUser() {
	auth.dao.UserCreate(model.User{
		UserName: "admin",
		Password: auth.encodePwd("123456"),
	})
}

func (auth *Service) AuthUser(username, password string) (*model.User, bool) {

	user, _ := auth.dao.GetUserByUserName(username)
	if user == nil {
		return nil, false
	}

	if user.Password == "" || len(user.Password) == 0 {
		return nil, false
	}

	pwd := auth.decodePwd(user.Password)

	if pwd != password {
		return nil, false
	}

	return user, true
}

func (auth *Service) encodePwd(password string) string {
	pwd, _ := strings.RsaEncode(conf.Conf.PwdKey.PublicKey, password)
	return pwd
}

func (auth *Service) decodePwd(password string) string {
	pwd, _ := strings.RsaDecode(conf.Conf.PwdKey.PrivateKey, password)
	return pwd
}
