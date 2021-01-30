package model

import ()

// "exam/lib/database/data"

type Chapter struct {
	Model
	SyllabusId   uint      `json:"syllabusId"`
	Name         string    `json:"name"`
	ParentId     uint      `json:"parentId"`
	Children     []Chapter `gorm:"-" json:"children,omitempty"`
	IsLeaf       int       `gorm:"-" json:"isLeaf"`
	QuestionList string    `gorm:"-" json:"questionList"`
}
