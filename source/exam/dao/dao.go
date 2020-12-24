package dao

import (
	"exam/conf"
	"exam/lib/database/orm"

	"exam/model"

	"github.com/jinzhu/gorm"
)

type Dao struct {
	orm *gorm.DB
}

func New(cf *conf.Config) *Dao {
	db := orm.New(cf.Orm)

	if !db.HasTable(&model.Subject{}) {
		db.CreateTable(&model.Subject{})
	}

	if !db.HasTable(&model.Syllabus{}) {
		db.CreateTable(&model.Syllabus{})
	}

	if !db.HasTable(&model.User{}) {
		db.CreateTable(&model.User{})
	}

	if !db.HasTable(&model.Chapter{}) {
		db.CreateTable(&model.Chapter{})
	}

	if !db.HasTable(&model.Student{}) {
		db.CreateTable(&model.Student{})
	}

	if !db.HasTable(&model.ReportHistory{}) {
		db.CreateTable(&model.ReportHistory{})
	}

	if !db.HasTable(&model.SubjectReport{}) {
		db.CreateTable(&model.SubjectReport{})
	}

	if !db.HasTable(&model.HometeacherReport{}) {
		db.CreateTable(&model.HometeacherReport{})
	}

	if !db.HasTable(&model.Question{}) {
		db.CreateTable(&model.Question{})
	}

	if !db.HasTable(&model.TextContent{}) {
		db.CreateTable(&model.TextContent{})
	}

	if !db.HasTable(&model.Image{}) {
		db.CreateTable(&model.Image{})
	}

	if !db.HasTable(&model.QuestionToChapter{}) {
		db.CreateTable(&model.QuestionToChapter{})
	}

	if !db.HasTable(&model.ExamPaper{}) {
		db.CreateTable(&model.ExamPaper{})
	}

	if !db.HasTable(&model.PastPaper{}) {
		db.CreateTable(&model.PastPaper{})
	}

	return &Dao{
		orm: orm.New(cf.Orm),
	}
}
