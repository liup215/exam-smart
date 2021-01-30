package dao

import (
	"exam/model"
	"github.com/jinzhu/gorm"
)

type TextContentQuery struct {
	model.Model
	Page
}

func (q TextContentQuery) ParseQuery(db *gorm.DB) *gorm.DB {
	db = db.Model(&model.TextContent{})
	if q.ID != uint(0) {
		db = db.Where("id = ?", q.ID)
	}
	return db
}

/*

func (d *Dao) TextContentAdd(txt model.TextContent) (uint, error) {
	err := d.orm.Create(&txt).Error

	return txt.ID, err
}

func (d *Dao) TextContentUpdate(txt model.TextContent) error {
	if txt.ID == uint(0) {
		return errors.New("ID不能为空!")
	}

	return d.orm.Save(&txt).Error
}

func (d *Dao) TextContentById(id uint) (*model.TextContent, error) {
	if id == uint(0) {
		return nil, errors.New("id不能为空!")
	}
	textContent := model.TextContent{}
	err := d.orm.Model(&model.TextContent{}).Where("id = ?", id).First(&textContent).Error

	return &textContent, err
}
*/
