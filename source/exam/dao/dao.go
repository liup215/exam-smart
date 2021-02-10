package dao

import (
	"errors"
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

	if !db.HasTable(&model.Teacher{}) {
		db.CreateTable(&model.Teacher{})
	}

	return &Dao{
		orm: orm.New(cf.Orm),
	}
}

func (d *Dao) Create(input Model, q Query) error {
	if input.GetID() != uint(0) {
		return errors.New("新增记录ID必须为空")
	}

	db := q.ParseQuery(d.orm)

	return db.Create(input).Error
}

func (d *Dao) Update(input Model, q Query) error {
	if input.GetID() == uint(0) {
		return errors.New("无效的ID")
	}
	db := q.ParseQuery(d.orm)
	return db.Update(input).Error
}

func (d *Dao) Save(input Model, q Query) error {
	if input.GetID() == uint(0) {
		return errors.New("无效的ID")
	}
	db := q.ParseQuery(d.orm)
	return db.Save(input).Error
}

func (d *Dao) Delete(input interface{}, q Query) error {
	db := q.ParseQuery(d.orm)
	return db.Delete(input).Error
}

func (d *Dao) SelectOne(result interface{}, q Query) error {
	db := q.ParseQuery(d.orm)
	return db.First(result).Error
}

func (d *Dao) SelectList(result, total interface{}, q Query) error {
	db := q.ParseQuery(d.orm)
	err := db.Count(total).Error
	if err != nil {
		if err != gorm.ErrRecordNotFound {
			return err
		}
	}

	pageIndex := q.GetPageIndex()
	pageSize := q.GetPageSize()

	err = db.Offset((pageIndex - 1) * pageSize).Limit(pageSize).Find(result).Error
	if err != nil {
		if err != gorm.ErrRecordNotFound {
			return err
		}
	}

	return nil
}

func (d *Dao) SelectAll(result, total interface{}, q Query) error {
	db := q.ParseQuery(d.orm)
	err := db.Find(result).Count(total).Error
	if err != nil {
		if err != gorm.ErrRecordNotFound {
			return err
		}
	}
	return nil
}

func (d *Dao) Count(q Query) int {
	db := q.ParseQuery(d.orm)

	total := 0
	db.Count(&total)
	return total
}

type Query interface {
	ParseQuery(*gorm.DB) *gorm.DB
	GetPageIndex() int
	GetPageSize() int
}

type Page struct {
	PageIndex int `json:"pageIndex" form:"pageIndex"`
	PageSize  int `json:"pageSize" form:"pageSize"`
}

func (p Page) GetPageIndex() int {
	if p.PageIndex <= 0 {
		p.PageIndex = 1
	}

	return p.PageIndex
}

func (p Page) GetPageSize() int {
	if p.PageSize <= 0 {
		p.PageSize = 20
	}

	return p.PageSize
}

type Model interface {
	GetID() uint
}
