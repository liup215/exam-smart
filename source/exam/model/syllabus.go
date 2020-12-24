package model

import (
	"github.com/jinzhu/gorm"
)

const (
	SYLLABUS_TYPE_ALL = iota
	SYLLABUS_TYPE_CIE
	SYLLABUS_TYPE_EDX
)

type Syllabus struct {
	gorm.Model
	Name        string
	SubjectId   uint
	SubjectName string `gorm:"-"`
	Type        int
	TypeName    string `gorm:"-"`
}

func (s Syllabus) GetSyllabusTypeName() string {
	if s.Type == SYLLABUS_TYPE_CIE {
		return "CIE"
	} else if s.Type == SYLLABUS_TYPE_EDX {
		return "Edexcel"
	}

	return ""
}

type SyllabusQuery struct {
	ID        uint
	SubjectId uint `json:"subjectId"`
	Type      int
	PageIndex int `form:"pageIndex" json:"pageIndex"`
	PageSize  int `form:"pageSize" json:"pageSize"`
}
