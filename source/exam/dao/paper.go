package dao

import (
	"errors"
	"exam/model"

	"github.com/jinzhu/gorm"
)

func (d *Dao) PastPaperAdd(paper model.PastPaper) error {
	if paper.ID != 0 {
		paper.ID = 0
	}

	return d.orm.Create(&paper).Error
}

func (d *Dao) PastPaperEdit(paper model.PastPaper) error {
	if paper.ID == 0 {
		return errors.New("试卷ID不能为空")
	}
	return d.orm.Save(&paper).Error
}

func (d *Dao) PastPaperById(id uint) (*model.PastPaper, error) {
	p := model.PastPaper{}
	err := d.orm.Model(&model.PastPaper{}).Where("id = ?", id).First(&p).Error

	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return nil, errors.New("查无此卷!")
		} else {
			return nil, err
		}
	}

	return &p, nil
}

func (d *Dao) PastPaperList(q model.PastPaperQuery) ([]model.PastPaper, int) {
	list := []model.PastPaper{}
	total := 0

	db := d.parsePastPaperQuery(q)

	db.Count(&total)

	if q.PageIndex <= 0 {
		q.PageIndex = 1
	}

	if q.PageSize <= 0 {
		q.PageSize = 20
	}

	db.Order("id desc").Offset((q.PageIndex - 1) * q.PageSize).Limit(q.PageSize).Find(&list)

	return list, 0
}

func (d *Dao) parsePastPaperQuery(q model.PastPaperQuery) *gorm.DB {
	db := d.orm.Model(&model.PastPaper{})

	if q.ID != 0 {
		db = db.Where("id = ?", q.ID)
	}

	if q.SyllabusId != uint(0) {
		db = db.Where("syllabus_id = ?", q.SyllabusId)
	}

	if q.YearId != uint(0) {
		db = db.Where("year = ?", q.YearId)
	}

	if q.CodeId != uint(0) {
		db = db.Where("code = ?", q.CodeId)
	}

	if q.SeriesId != uint(0) {
		db = db.Where("series = ?", q.SeriesId)
	}

	return db
}

func (d *Dao) YearAdd(year model.Year) (model.Year, error) {
	if year.ID != uint(0) {
		year.ID = uint(0)
	}

	err := d.orm.Create(&year).Error
	return year, err
}

func (d *Dao) YearEdit(year model.Year) (model.Year, error) {
	if year.ID == uint(0) {
		return model.Year{}, errors.New("年份ID不能为空")
	}

	err := d.orm.Save(&year).Error
	return year, err
}

func (d *Dao) SelectYearById(id uint) (model.Year, error) {
	if id == uint(0) {
		return model.Year{}, errors.New("年份ID不能为空")
	}

	year := model.Year{}

	err := d.orm.Model(&model.Year{}).Where("id = ?", id).First(&year).Error
	return year, err
}

func (d *Dao) SelectYearAll() ([]model.Year, int) {
	list := []model.Year{}
	total := 0
	d.orm.Find(&list).Count(total)

	return list, total
}

func (d *Dao) SelectYearList(q model.YearQuery) ([]model.Year, int) {
	list := []model.Year{}
	total := 0
	if q.PageIndex <= 0 {
		q.PageIndex = 1
	}

	if q.PageSize <= 0 {
		q.PageSize = 1
	}

	db := d.parseYearQuery(q)

	db.Offset((q.PageIndex - 1) * q.PageSize).Limit(q.PageSize).Find(&list)
	db.Count(&total)
	return list, total
}

func (d *Dao) parseYearQuery(q model.YearQuery) *gorm.DB {
	db := d.orm.Model(&model.Year{})
	if q.ID != uint(0) {
		db = db.Where("id = ?", q.ID)
	}

	return db
}

func (d *Dao) SeriesAdd(s model.Series) (model.Series, error) {
	if s.ID != uint(0) {
		s.ID = uint(0)
	}

	err := d.orm.Create(&s).Error
	return s, err
}

func (d *Dao) SeriesEdit(s model.Series) (model.Series, error) {
	if s.ID == uint(0) {
		return model.Series{}, errors.New("无效的ID")
	}

	err := d.orm.Save(&s).Error

	return s, err
}

func (d *Dao) SelectSeriesById(id uint) (model.Series, error) {
	s := model.Series{}
	if id == uint(0) {
		return model.Series{}, errors.New("无效的ID")
	}

	err := d.orm.Where("id = ?", id).First(&s).Error
	return s, err
}

func (d *Dao) SelectSeriesList(q model.SeriesQuery) ([]model.Series, int) {
	if q.PageIndex <= 0 {
		q.PageIndex = 1
	}
	if q.PageSize <= 0 {
		q.PageSize = 10
	}

	list := []model.Series{}
	total := 0

	db := d.parseSeriesQuery(q)

	db.Count(&total)
	db.Offset((q.PageIndex - 1) * q.PageSize).Limit(q.PageSize).Find(&list)

	return list, total
}

func (d *Dao) parseSeriesQuery(q model.SeriesQuery) *gorm.DB {
	db := d.orm.Model(&model.Series{})
	if q.ID != 0 {
		db = db.Where("id = ?", q.ID)
	}

	if q.SyllabusId != uint(0) {
		db = db.Where("syllabus_id = ?", q.SyllabusId)
	}

	return db
}

func (d *Dao) CodeAdd(c model.Code) (model.Code, error) {
	if c.ID != uint(0) {
		c.ID = uint(0)
	}

	err := d.orm.Create(&c).Error
	return c, err
}

func (d *Dao) CodeEdit(c model.Code) (model.Code, error) {
	if c.ID == uint(0) {
		return model.Code{}, errors.New("无效的ID")
	}

	err := d.orm.Save(&c).Error

	return c, err
}

func (d *Dao) SelectCodeById(id uint) (model.Code, error) {
	c := model.Code{}
	if id == uint(0) {
		return model.Code{}, errors.New("无效的ID")
	}

	err := d.orm.Where("id = ?", id).First(&c).Error
	return c, err
}

func (d *Dao) SelectCodeList(q model.CodeQuery) ([]model.Code, int) {
	if q.PageIndex <= 0 {
		q.PageIndex = 1
	}
	if q.PageSize <= 0 {
		q.PageSize = 10
	}

	list := []model.Code{}
	total := 0

	db := d.parseCodeQuery(q)

	db.Count(&total)
	db.Offset((q.PageIndex - 1) * q.PageSize).Limit(q.PageSize).Find(&list)

	return list, total
}

func (d *Dao) parseCodeQuery(q model.CodeQuery) *gorm.DB {
	db := d.orm.Model(&model.Code{})
	if q.ID != 0 {
		db = db.Where("id = ?", q.ID)
	}

	if q.SyllabusId != uint(0) {
		db = db.Where("syllabus_id = ?", q.SyllabusId)
	}

	return db
}
