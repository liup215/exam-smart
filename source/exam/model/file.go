package model

import (
	"github.com/jinzhu/gorm"
)

type Image struct {
	gorm.Model
	Name string `gorm:"unique;type:varchar(64)"`
}
