package service

import (
	"errors"
	"exam/dao"
	"exam/model"
)

func (s *Service) SubjectAdd(sub model.Subject) error {
	if sub.ID != uint(0) {
		sub.ID = uint(0)
	}
	return s.dao.Create(&sub, dao.SubjectQuery{})
}

func (s *Service) SubjectEdit(sub model.Subject) error {
	if sub.ID == uint(0) {
		return errors.New("无效的ID")
	}
	return s.dao.Save(&sub, dao.SubjectQuery{Model: model.Model{ID: sub.ID}})
}

func (s *Service) AllSubject() ([]model.Subject, int) {
	list := []model.Subject{}
	total := 0
	s.dao.SelectAll(&list, &total, dao.SubjectQuery{})
	return list, total
}

func (s *Service) SelectSubjectList(query dao.SubjectQuery) ([]model.Subject, int) {
	list := []model.Subject{}
	total := 0
	s.dao.SelectAll(&list, &total, query)
	return list, total
}

func (s *Service) SelectSubjectById(id uint) (model.Subject, error) {
	sub := model.Subject{}
	err := s.dao.SelectOne(&sub, dao.SubjectQuery{Model: model.Model{ID: id}})
	return sub, err
}
