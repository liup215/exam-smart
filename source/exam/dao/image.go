package dao

import (
	"exam/model"
	"github.com/jinzhu/gorm"
)

type ImageQuery struct {
	model.Model
	Name string `json:"name" form:"name"`
	Page
}

func (q ImageQuery) ParseQuery(db *gorm.DB) *gorm.DB {
	db = db.Model(&model.Image{})
	if q.ID != uint(0) {
		db = db.Where("id = ?", q.ID)
	}

	if q.Name != "" {
		db = db.Where("name = ?", q.Name)
	}

	return db
}

/*
func (d *Dao) ImageAdd(img model.Image) (*model.Image, error) {
	if img.ID != uint(0) {
		img.ID = uint(0)
	}

	err := d.orm.Create(&img).Error
	return &img, err
}

func (d *Dao) ImageByName(name string) (*model.Image, error) {
	img := model.Image{}
	if name == "" {
		return nil, errors.New("文件名不能为空!")
	}

	err := d.orm.Model(&model.Image{}).Where("name = ?", name).First(&img).Error

	if err == nil {
		return &img, nil
	} else {
		return nil, err
	}
}

*/
