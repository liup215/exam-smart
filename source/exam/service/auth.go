package service

import (
	"exam/lib/strings"
	"exam/model"
)

func (auth *Service) InitUser() {
	salt := strings.Random(8)
	auth.dao.AdminCreate(model.Admin{
		UserName: "admin",
		Password: auth.UserHash("123456" + salt),
		Salt:     salt,
		Status:   model.USER_STATUS_ENABLE,
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

	if auth.UserHash(password+user.Salt) != user.Password {
		return nil, false
	}

	return user, true
}

func (s *Service) UserHash(saltedPwd string) string {
	return strings.Sha1(saltedPwd)
}
