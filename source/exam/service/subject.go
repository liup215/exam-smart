package service

import (
	"exam/model"
)

func (s *Service) SubjectAdd(sub model.Subject) error {
	return s.dao.SubjectAdd(sub)
}

func (s *Service) SubjectEdit(sub model.Subject) error {
	return s.dao.SubjectEdit(sub)
}

func (s *Service) AllSubject() ([]model.Subject, int) {
	return s.dao.AllSubject()
}

func (s *Service) SelectSubjectList(query model.SubjectQuery) ([]model.Subject, int) {
	return s.dao.SelectSubjectList(query)
}

func (s *Service) SelectSubjectById(id uint) (model.Subject, error) {
	return s.dao.SelectSubjectById(id)
}
