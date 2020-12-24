package service

import (
	"exam/model"
)

func (s *Service) PastPaperAdd(p model.PastPaper) error {
	return s.dao.PastPaperAdd(p)
}

func (s *Service) PastPaperEdit(p model.PastPaper) error {
	return s.dao.PastPaperEdit(p)
}

func (s *Service) PastPaperById(id uint) (*model.PastPaper, error) {
	p, err := s.dao.PastPaperById(id)

	pp := s.pastPaperFormat(*p)
	return &pp, err
}

func (s *Service) PastPaperList(q model.PastPaperQuery) ([]model.PastPaper, int) {
	list, total := s.dao.PastPaperList(q)

	for i, p := range list {
		list[i] = s.pastPaperFormat(p)
	}

	return list, total
}

func (s *Service) pastPaperFormat(p model.PastPaper) model.PastPaper {
	if p.SyllabusId == uint(0) {
		return p
	}
	// 获取考纲
	syllabus, _ := s.dao.SelectSyllabusById(p.SyllabusId)
	p.SyllabusTypeName = syllabus.GetSyllabusTypeName()
	p.SyllabusName = syllabus.Name
	p.SyllabusType = syllabus.Type

	subject, _ := s.dao.SelectSubjectById(syllabus.SubjectId)

	p.SubjectId = subject.ID
	p.SubjectName = subject.Name

	return p
}
