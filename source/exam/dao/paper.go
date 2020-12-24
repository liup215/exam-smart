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

	if q.SyllabusId != 0 {
		db = db.Where("syllabus_id = ?", q.SyllabusId)
	}

	if q.Year != 0 {
		db = db.Where("year = ?", q.Year)
	}

	if q.Code != "" {
		db = db.Where("code = ?", q.Code)
	}

	if q.Series != "" {
		db = db.Where("series = ?", q.Series)
	}

	return db
}
