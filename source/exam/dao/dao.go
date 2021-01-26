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

	if !db.HasTable(&model.Admin{}) {
		db.CreateTable(&model.Admin{})
	}

	if !db.HasTable(&model.Chapter{}) {
		db.CreateTable(&model.Chapter{})
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

	if !db.HasTable(&model.Year{}) {
		db.CreateTable(&model.Year{})
	}

	if !db.HasTable(&model.Series{}) {
		db.CreateTable(&model.Series{})
	}

	if !db.HasTable(&model.Code{}) {
		db.CreateTable(&model.Code{})
	}

	return &Dao{
		orm: orm.New(cf.Orm),
	}
}

func (d *Dao) Add(input interface{}, m Mapper) error {
	db := m.ParseQuery(d.orm)

	return db.Create(input).Error
}

func (d *Dao) Edit(input interface{}, m Mapper) error {
	db := m.ParseQuery(d.orm)

	return db.Save(input).Error
}

func (d *Dao) SelectOne(result interface{}, m Mapper) error {
	db := m.ParseQuery(d.orm)
	return db.First(result).Error
}

func (d *Dao) SelectList(result, total interface{}, m Mapper, pageIndex, pageSize int) error {
	db := m.ParseQuery(d.orm)
	err := db.Count(total).Error
	if err != nil {
		if err != gorm.ErrRecordNotFound {
			return err
		}
	}

	if pageIndex <= 0 {
		pageIndex = 1
	}

	if pageSize <= 0 {
		pageSize = 10
	}

	err = db.Offset((pageIndex - 1) * pageSize).Limit(pageSize).Find(result).Error
	if err != nil {
		if err != gorm.ErrRecordNotFound {
			return err
		}
	}

	return nil
}

func (d *Dao) SelectAll(result, total interface{}, m Mapper) error {
	db := m.ParseQuery(d.orm)
	err := db.Find(result).Count(total).Error
	if err != nil {
		if err != gorm.ErrRecordNotFound {
			return err
		}
	}
	return nil
}

type Mapper interface {
	ParseQuery(*gorm.DB) *gorm.DB
}
