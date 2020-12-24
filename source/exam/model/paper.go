package model

import (
	"github.com/jinzhu/gorm"
)

type PastPaper struct {
	gorm.Model
	Name       string
	SyllabusId uint
	Year       int
	Code       string
	Series     string

	// Response
	SyllabusType     int    `gorm:"-"`
	SyllabusTypeName string `gorm:"-"`
	SyllabusName     string `gorm:"-"`
	SubjectId        uint   `gorm:"-"`
	SubjectName      string `gorm:"-"`
}

type PastPaperQuery struct {
	ID         uint
	SyllabusId uint
	Year       int
	Code       string
	Series     string
	PageIndex  int
	PageSize   int
}

type ExamPaper struct {
	gorm.Model
	Name              string // 试卷名称
	SyllabusId        uint   // 考纲ID
	Score             int    // 试卷总分(千分制)
	QuestionCount     int    // 题目数量
	SuggestTime       int    // 建议时长(分钟)
	FrameTexcontentId uint   // 试卷框架 内容为JSON
	CreateUser        uint

	// request VM
	TitleItems []ExamPaperTitleItem `gorm:"-"`

	// response VM
	CreatedAtFormatted string `gorm:"-"`
	SyllabusName       string `gorm:"-"`
	SyllabusType       int    `gorm:"-"`
	SyllabusTypeName   string `gorm:"-"`
	SubjectId          uint   `gorm:"-"`
	SubjectName        string `gorm:"-"`
}

type ExamPaperQuery struct {
	ID         uint
	SyllabusId uint
	PageIndex  int `json:"pageIndex" form:"pageIndex"`
	PageSize   int `json:"pageSize" form:"pageSize"`
}

type ExamPaperTitleItem struct {
	Name          string
	QuestionItems []ExamPaperQuestionItem
}

type ExamPaperQuestionItem struct {
	ItemOrder int
	Question  Question
}
