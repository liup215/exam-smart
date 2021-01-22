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

func (s *Service) YearAdd(year model.Year) (model.Year, error) {
	if year.ID != uint(0) {
		year.ID = uint(0)
	}

	return s.dao.YearAdd(year)

}

func (s *Service) YearEdit(year model.Year) (model.Year, error) {
	return s.dao.YearEdit(year)
}

func (s *Service) SelectYearById(id uint) (model.Year, error) {
	return s.dao.SelectYearById(id)
}

func (s *Service) SelectYearAll() ([]model.Year, int) {
	return s.dao.SelectYearAll()
}

func (s *Service) SelectYearList(q model.YearQuery) ([]model.Year, int) {
	return s.dao.SelectYearList(q)
}

func (s *Service) SeriesAdd(se model.Series) (model.Series, error) {
	return s.dao.SeriesAdd(se)
}

func (s *Service) SeriesEdit(se model.Series) (model.Series, error) {
	return s.dao.SeriesEdit(se)
}

func (s *Service) SelectSeriesById(id uint) (model.Series, error) {
	return s.dao.SelectSeriesById(id)
}

func (s *Service) SelectSeriesList(q model.SeriesQuery) ([]model.Series, int) {
	return s.dao.SelectSeriesList(q)
}

func (s *Service) CodeAdd(se model.Code) (model.Code, error) {
	return s.dao.CodeAdd(se)
}

func (s *Service) CodeEdit(se model.Code) (model.Code, error) {
	return s.dao.CodeEdit(se)
}

func (s *Service) SelectCodeById(id uint) (model.Code, error) {
	return s.dao.SelectCodeById(id)
}

func (s *Service) SelectCodeList(q model.CodeQuery) ([]model.Code, int) {
	return s.dao.SelectCodeList(q)
}
