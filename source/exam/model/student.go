package model

import (
	"github.com/jinzhu/gorm"
)

type Student struct {
	gorm.Model
	Name         string
	EngName      string
	Class        string
	TotalMark    int
	ActivityMark int
}

type StudentQuery struct {
	ID      uint
	Name    string
	EngName string
	Class   string
}
