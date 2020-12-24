package model

import (
	"github.com/jinzhu/gorm"
)

type TextContent struct {
	gorm.Model
	Content string `gorm:"type:TEXT"`
}
