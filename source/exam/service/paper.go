package service

import (
	"errors"
	"exam/dao"
	"exam/model"
)

func (s *Service) PastPaperAdd(p model.PastPaper) error {
	if p.ID != 0 {
		p.ID = uint(0)
	}
	return s.dao.Create(p, dao.PastPaperQuery{})
}

func (s *Service) PastPaperEdit(p model.PastPaper) error {
	return s.dao.Save(p, dao.PastPaperQuery{})
}

func (s *Service) PastPaperById(id uint) (*model.PastPaper, error) {
	p := model.PastPaper{}
	err := s.dao.SelectOne(&p, dao.PastPaperQuery{Model: model.Model{ID: id}})

	pp := s.pastPaperFormat(p)
	return &pp, err
}

func (s *Service) PastPaperList(q dao.PastPaperQuery) ([]model.PastPaper, int) {
	list := []model.PastPaper{}
	total := 0
	s.dao.SelectList(&list, &total, q)

	for i, p := range list {
		list[i] = s.pastPaperFormat(p)
	}

	return list, total
}

func (s *Service) pastPaperFormat(p model.PastPaper) model.PastPaper {
	if p.SyllabusId == uint(0) {
		return p
	}

	syllabusOption := s.buildSyllabusOptionById(p.SyllabusId)
	p.PaperOption.SyllabusOption = syllabusOption

	year, _ := s.SelectYearById(p.YearId)
	p.PaperOption.YearName = year.Name

	series, _ := s.SelectSeriesById(p.SeriesId)
	p.PaperOption.SeriesName = series.Name

	code, _ := s.SelectCodeById(p.CodeId)
	p.PaperOption.CodeName = code.Name

	_, insertedQuestionNumber := s.SelectQuestionAllByQuery(dao.QuestionQuery{PastPaperId: p.ID})

	p.InsertedQuestionNumber = insertedQuestionNumber

	return p
}

func (s *Service) YearAdd(year model.Year) (model.Year, error) {
	if year.ID != uint(0) {
		year.ID = uint(0)
	}

	err := s.dao.Create(&year, dao.YearQuery{})
	return year, err
}

func (s *Service) YearEdit(year model.Year) (model.Year, error) {
	if year.ID == uint(0) {
		return year, errors.New("无效的ID")
	}

	err := s.dao.Save(&year, dao.YearQuery{})
	return year, err
}

func (s *Service) SelectYearById(id uint) (model.Year, error) {
	year := model.Year{}
	err := s.dao.SelectOne(&year, dao.YearQuery{Model: model.Model{ID: id}})
	return year, err
}

func (s *Service) SelectYearList(q dao.YearQuery) ([]model.Year, int) {
	list := []model.Year{}
	total := 0
	s.dao.SelectList(&list, &total, q)
	return list, total
}

func (s *Service) SelectYearAll(q dao.YearQuery) ([]model.Year, int) {
	list := []model.Year{}
	total := 0
	s.dao.SelectAll(&list, &total, q)
	return list, total
}

func (s *Service) SeriesAdd(se model.Series) (model.Series, error) {
	if se.ID != uint(0) {
		se.ID = uint(0)
	}
	err := s.dao.Create(&se, dao.SeriesQuery{})
	return se, err
}

func (s *Service) SeriesEdit(se model.Series) (model.Series, error) {
	err := s.dao.Save(&se, dao.SeriesQuery{})
	return se, err
}

func (s *Service) SelectSeriesById(id uint) (model.Series, error) {
	se := model.Series{}

	err := s.dao.SelectOne(&se, dao.SeriesQuery{Model: model.Model{ID: id}})
	if err != nil {
		return se, err
	}
	syllabusOption := s.buildSyllabusOptionById(se.SyllabusId)
	se.SyllabusOption = syllabusOption
	return se, err
}

func (s *Service) SelectSeriesList(q dao.SeriesQuery) ([]model.Series, int) {
	list := []model.Series{}
	total := 0
	s.dao.SelectList(&list, &total, q)
	for i, se := range list {
		syllabusOption := s.buildSyllabusOptionById(se.SyllabusId)
		list[i].SyllabusOption = syllabusOption
	}

	return list, total
}

func (s *Service) SelectSeriesAll(q dao.SeriesQuery) ([]model.Series, int) {
	list := []model.Series{}
	total := 0
	s.dao.SelectAll(&list, &total, q)
	return list, total
}

func (s *Service) CodeAdd(c model.Code) (model.Code, error) {
	if c.ID != uint(0) {
		c.ID = uint(0)
	}

	err := s.dao.Create(&c, dao.CodeQuery{})
	return c, err
}

func (s *Service) CodeEdit(c model.Code) (model.Code, error) {
	if c.ID == uint(0) {
		return c, errors.New("无效的ID")
	}

	err := s.dao.Save(&c, dao.CodeQuery{Model: model.Model{ID: c.ID}})
	return c, err
}

func (s *Service) SelectCodeById(id uint) (model.Code, error) {
	code := model.Code{}
	err := s.dao.SelectOne(&code, dao.CodeQuery{Model: model.Model{ID: id}})
	syllabusOption := s.buildSyllabusOptionById(code.SyllabusId)
	code.SyllabusOption = syllabusOption
	return code, err
}

func (s *Service) SelectCodeList(q dao.CodeQuery) ([]model.Code, int) {
	list := []model.Code{}
	total := 0
	s.dao.SelectList(&list, &total, q)
	for i, c := range list {
		syllabusOption := s.buildSyllabusOptionById(c.SyllabusId)
		list[i].SyllabusOption = syllabusOption
	}

	return list, total
}

func (s *Service) SelectCodeAll(q dao.CodeQuery) ([]model.Code, int) {
	list := []model.Code{}
	total := 0
	s.dao.SelectAll(&list, &total, q)
	return list, total
}
