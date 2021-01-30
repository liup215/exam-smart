package service

import (
	"exam/dao"
	"exam/lib/strings"
	"exam/model"
	"github.com/jinzhu/gorm"
)

func (s *Service) InitUser() {
	record := model.Admin{}
	err := s.dao.SelectOne(&record, dao.AdminQuery{UserName: "admin"})
	if err == nil {
		return
	}

	if err != gorm.ErrRecordNotFound {
		return
	}

	salt := strings.Random(8)

	admin := model.Admin{
		UserName: "admin",
		Password: s.UserHash("123456" + salt),
		Salt:     salt,
		Status:   model.USER_STATUS_ENABLE,
	}
	s.dao.Create(admin, dao.AdminQuery{})
}

func (s *Service) AuthAdmin(username, password string) (model.Admin, bool) {
	user := model.Admin{}
	err := s.dao.SelectOne(&user, dao.AdminQuery{UserName: username})
	if err != nil {
		return user, false
	}

	if user.Password == "" || len(user.Password) == 0 {
		return user, false
	}

	if s.UserHash(password+user.Salt) != user.Password {
		return user, false
	}

	return user, true
}

func (s *Service) UserHash(saltedPwd string) string {
	return strings.Sha1(saltedPwd)
}
