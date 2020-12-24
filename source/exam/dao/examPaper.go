package dao

import (
	"exam/model"

	"github.com/jinzhu/gorm"
)

func (dao *Dao) ExamPaperAdd(examPaper model.ExamPaper) (*model.ExamPaper, error) {
	err := dao.orm.Create(&examPaper).Error

	return &examPaper, err
}

func (dao *Dao) ExamPaperUpdate(examPaper model.ExamPaper) (*model.ExamPaper, error) {
	err := dao.orm.Save(&examPaper).Error
	return &examPaper, err
}

func (dao *Dao) SelectExamPaperById(id uint) (model.ExamPaper, error) {
	examPaper := model.ExamPaper{}
	err := dao.orm.Model(&model.ExamPaper{}).Where("id = ?", id).First(&examPaper).Error
	return examPaper, err
}

func (dao *Dao) SelectExamPaperAllCount() int {
	count := 0

	dao.orm.Model(&model.ExamPaper{}).Count(&count)

	return count
}

func (dao *Dao) SelectExamPaperList(query model.ExamPaperQuery) ([]model.ExamPaper, int) {

	list := []model.ExamPaper{}
	total := 0
	db := dao.parseExamPaperQuery(query)

	if query.PageIndex <= 0 {
		query.PageIndex = 1
	}

	if query.PageSize <= 0 {
		query.PageSize = 10
	}

	db.Order("id desc").Offset((query.PageIndex - 1) * query.PageSize).Limit(query.PageSize).Find(&list)

	db.Count(&total)

	return list, total
}

func (dao *Dao) parseExamPaperQuery(query model.ExamPaperQuery) *gorm.DB {
	db := dao.orm.Model(&model.ExamPaper{})

	if query.ID != 0 {
		db = db.Where("id = ?", query.ID)
	}
	return db

}
