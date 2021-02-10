package service

import (
	"errors"
	"exam/dao"
	"exam/model"
)

func (s *Service) GetTeacherById(id uint) (model.Teacher, error) {
	t := model.Teacher{}
	if id == uint(0) {
		return t, errors.New("ID 不能为空!")
	}

	if err := s.dao.SelectOne(&t, dao.TeacherQuery{Model: model.Model{ID: id}}); err != nil {
		return t, err
	}

	subject := model.Subject{}
	s.dao.SelectOne(&subject, dao.SubjectQuery{Model: model.Model{ID: t.SubjectId}})
	t.SubjectName = subject.Name

	return t, nil
}
