package service

import (
	"errors"
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

func (s *Service) AdminAuth(username, password string) (model.Admin, bool) {
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

func (s *Service) TeacherAuth(username, password string) (model.Teacher, bool) {
	t := model.Teacher{}
	if err := s.dao.SelectOne(&t, dao.TeacherQuery{UserName: username}); err != nil {
		return t, false
	}

	if t.Password == "" || len(t.Password) == 0 {
		return t, false
	}

	if s.UserHash(password+t.Salt) != t.Password {
		return t, false
	}

	return t, true
}

func (s *Service) TeacherRegister(username, password string) error {
	if username == "" || password == "" {
		return errors.New("用户名和密码不能为空！")
	}

	record := model.Teacher{}
	if err := s.dao.SelectOne(&record, dao.TeacherQuery{UserName: username}); err != nil {
		if err != gorm.ErrRecordNotFound {
			return err
		}
		salt := strings.Random(8)

		teacher := model.Teacher{
			UserName: username,
			Password: s.UserHash(password + salt),
			Salt:     salt,
			Status:   model.TEACHER_STATUS_ENABLE,
		}
		return s.dao.Create(teacher, dao.TeacherQuery{})
	}

	return errors.New("该用户名已存在")

}

func (s *Service) UserHash(saltedPwd string) string {
	return strings.Sha1(saltedPwd)
}
