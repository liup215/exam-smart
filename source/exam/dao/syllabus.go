package dao

import (
	"exam/model"

	"github.com/jinzhu/gorm"
)

type SyllabusQuery struct {
	model.Model
	SubjectId uint
	Type      int
	Page
}

func (q SyllabusQuery) ParseQuery(db *gorm.DB) *gorm.DB {
	db = db.Model(&model.Syllabus{})

	if q.ID != 0 {
		db = db.Where("id = ?", q.ID)
	}

	if q.SubjectId != 0 {
		db = db.Where("subject_id = ?", q.SubjectId)
	}

	if q.Type != 0 {
		db = db.Where("type = ?", q.Type)
	}

	return db
}

/*
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
*/
