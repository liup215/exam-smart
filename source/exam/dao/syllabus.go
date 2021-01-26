package dao

import (
	"errors"
	"exam/model"

	"github.com/jinzhu/gorm"
)

func (dao *Dao) SelectSyllabusById(id uint) (model.Syllabus, error) {
	result := model.Syllabus{}
	if id < 0 {
		return result, errors.New("书籍id无效")
	}

	err := dao.orm.Model(&model.Syllabus{}).Where("id = ?", id).First(&result).Error
	if err == nil {
		return result, err
	}

	if err == gorm.ErrRecordNotFound {
		return result, errors.New("查无该书籍")
	} else {
		return result, err
	}
}

func (dao *Dao) SelectSyllabusOne(query model.SyllabusQuery) (*model.Syllabus, error) {
	result := model.Syllabus{}

	db := dao.parseSyllabusQuery(query)
	err := db.First(&result).Error

	if err != nil {
		if err == gorm.ErrRecordNotFound {
			return nil, errors.New("未找到书籍")
		} else {
			return nil, err
		}
	}

	return &result, nil
}

func (dao *Dao) SelectSyllabusList(query model.SyllabusQuery) ([]model.Syllabus, int) {
	list := []model.Syllabus{}
	total := 0

	db := dao.parseSyllabusQuery(query)

	if query.PageIndex < 1 {
		query.PageIndex = 1
	}

	if query.PageSize < 1 {
		query.PageSize = 10
	}

	db.Order("id desc").Offset((query.PageIndex - 1) * query.PageSize).Limit(query.PageSize).Find(&list)

	db.Count(&total)

	return list, total
}

func (dao *Dao) parseSyllabusQuery(query model.SyllabusQuery) *gorm.DB {
	db := dao.orm.Model(&model.Syllabus{})

	if query.ID != 0 {
		db = db.Where("id = ?", query.ID)
	}

	if query.SubjectId != 0 {
		db = db.Where("subject_id = ?", query.SubjectId)
	}

	if query.Type != 0 {
		db = db.Where("type = ?", query.Type)
	}

	return db
}

func (dao *Dao) SyllabusAdd(syllabus model.Syllabus) error {
	db := dao.orm.Model(&model.Syllabus{})
	return db.Create(&syllabus).Error
}

func (dao *Dao) SyllabusUpdate(syllabus model.Syllabus) error {
	if syllabus.ID == 0 {
		return errors.New("书籍ID不能为空")
	}
	return dao.orm.Model(&model.Syllabus{}).Where(&model.Syllabus{Model: model.Model{ID: syllabus.ID}}).Save(&syllabus).Error
}

type SyllabusMapper struct {
	SyllabusQuery model.SyllabusQuery
}

func (sm SyllabusMapper) ParseQuery(db *gorm.DB) *gorm.DB {
	query := sm.SyllabusQuery
	if query.ID != 0 {
		db = db.Where("id = ?", query.ID)
	}

	if query.SubjectId != 0 {
		db = db.Where("subject_id = ?", query.SubjectId)
	}

	if query.Type != 0 {
		db = db.Where("type = ?", query.Type)
	}

	return db
}
