package dao

import (
	"exam/model"
	"github.com/jinzhu/gorm"
)

type TeacherQuery struct {
	model.Model
	UserName string `json:"userName"`
	Page
}

func (q TeacherQuery) ParseQuery(db *gorm.DB) *gorm.DB {
	db = db.Model(&model.Teacher{})
	if q.ID != uint(0) {
		db = db.Where("id = ?", q.ID)
	}

	if q.UserName != "" {
		db = db.Where("user_name = ?", q.UserName)
	}
	return db
}
