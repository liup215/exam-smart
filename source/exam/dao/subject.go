package dao

import (
	"errors"
	"exam/model"

	"github.com/jinzhu/gorm"
)

func (dao *Dao) SubjectAdd(sub model.Subject) error {
	if sub.ID != 0 {
		sub.ID = 0
	}

	return dao.orm.Create(&sub).Error
}

func (dao *Dao) SubjectEdit(sub model.Subject) error {
	if sub.ID == 0 {
		return errors.New("科目ID不能为空!")
	}
	return dao.orm.Save(&sub).Error
}

func (dao *Dao) SelectSubjectById(id uint) (model.Subject, error) {
	s := model.Subject{}

	err := dao.orm.Where("id = ?", id).First(&s).Error
	return s, err
}

func (dao *Dao) AllSubject() ([]model.Subject, int) {
	list := []model.Subject{}
	total := 0

	dao.orm.Model(&model.Subject{}).Find(&list).Count(&total)
	return list, total
}

func (dao *Dao) SelectSubjectList(query model.SubjectQuery) ([]model.Subject, int) {
	list := []model.Subject{}
	total := 0

	if query.PageIndex <= 0 {
		query.PageIndex = 1
	}

	if query.PageSize <= 0 {
		query.PageSize = 10
	}

	db := dao.parseSubjectQuery(query)

	db.Order("item_order desc, id desc").Offset((query.PageIndex - 1) * query.PageSize).Limit(query.PageSize).Find(&list)

	db.Count(&total)

	return list, total
}

func (dao *Dao) parseSubjectQuery(query model.SubjectQuery) *gorm.DB {
	db := dao.orm.Model(&model.Subject{})

	return db
}
