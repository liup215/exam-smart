package model

import ()

const (
	SYLLABUS_TYPE_ALL = iota
	SYLLABUS_TYPE_CIE
	SYLLABUS_TYPE_EDX
)

type Syllabus struct {
	Model
	Name        string `json:"name"`
	SubjectId   uint   `json:"subjectId"`
	SubjectName string `gorm:"-" json:"subjectName"`
	Type        int    `json:"type"`
	TypeName    string `gorm:"-" json:"typeName"`
}

func (s Syllabus) GetSyllabusTypeName() string {
	if s.Type == SYLLABUS_TYPE_CIE {
		return "CIE"
	} else if s.Type == SYLLABUS_TYPE_EDX {
		return "Edexcel"
	}

	return ""
}
