package dao

import (
	"exam/model"

	"github.com/jinzhu/gorm"
)

type ExamPaperQuery struct {
	model.Model
	Name string `json:"name"` // 试卷名称
	model.PaperOption
	Page
}

func (q ExamPaperQuery) ParseQuery(db *gorm.DB) *gorm.DB {
	db = db.Model(&model.ExamPaper{})

	if q.ID != 0 {
		db = db.Where("id = ?", q.ID)
	}
	return db

}
