package model

import (
	"github.com/jinzhu/gorm"
)

type QuestionToChapter struct {
	gorm.Model
	QuestionId uint
	ChapterId  uint
}

type QuestionToChapterQuery struct {
	Id         uint
	QuestionId uint
	ChapterId  uint
	PageIndex  int
	PageSize   int
}
