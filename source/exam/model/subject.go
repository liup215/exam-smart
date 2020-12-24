package model

import (
	"github.com/jinzhu/gorm"
)

type Subject struct {
	gorm.Model
	Name      string // 语文 数学 英语 等
	ItemOrder int    // 排序
}

type SubjectQuery struct {
	PageIndex int
	PageSize  int
}
