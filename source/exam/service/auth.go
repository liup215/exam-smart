package service

import (
	"exam/conf"

	"exam/lib/strings"
	"exam/model"
)

func (auth *Service) InitUser() {
	auth.dao.AdminCreate(model.Admin{
		UserName: "admin",
		Password: auth.encodePwd("123456"),
	})
}

func (auth *Service) AuthAdmin(username, password string) (*model.Admin, bool) {

	user, _ := auth.dao.GetAdminByUserName(username)
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

func (auth *Service) AuthTeacher(username, password string) (*model.Teacher, bool) {

	user, _ := auth.dao.GetTeacherByUserName(username)
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
