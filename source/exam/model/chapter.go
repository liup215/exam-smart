package model

import (
	"github.com/jinzhu/gorm"
)

// "exam/lib/database/data"

type Chapter struct {
	gorm.Model
	SyllabusId   uint
	Name         string
	ParentId     uint
	Children     []Chapter `gorm:"-" json:"Children,omitempty"`
	IsLeaf       int       `gorm:"-"`
	QuestionList string    `grom:""`
}

type ChapterQuery struct {
	ID         uint
	SyllabusId uint
	ParentId   uint
	PageIndex  int
	PageSize   int
}
