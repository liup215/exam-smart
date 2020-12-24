package service

import (
	"exam/model"
)

func (s *Service) StudentList(q model.StudentQuery) ([]model.Student, int) {
	return s.dao.StudentList(q)
}

func (s *Service) InitStudents() {
	_, total := s.dao.StudentList(model.StudentQuery{})
	if total != 0 {
		return
	}
	s.dao.InitStudents()
}
