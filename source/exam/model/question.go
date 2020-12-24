package model

import (
	"encoding/json"

	"github.com/jinzhu/gorm"
)

const (
	QUESTION_TYPE_SINGLE_CHOICE   = 1
	QUESTION_TYPE_MULTIPLE_CHOICE = 2
	QUESTION_TYPE_TRUE_FALSE      = 3
	QUESTION_TYPE_GAP_FILLING     = 4
	QUESTION_TYPE_SHORT_ANSWER    = 5
)

func QuestionTypeMap() map[int]string {
	return map[int]string{
		QUESTION_TYPE_SINGLE_CHOICE:   "单选题",
		QUESTION_TYPE_MULTIPLE_CHOICE: "多选题",
		QUESTION_TYPE_TRUE_FALSE:      "判断题",
		QUESTION_TYPE_GAP_FILLING:     "填空题",
		QUESTION_TYPE_SHORT_ANSWER:    "简答题",
	}
}

type Question struct {
	gorm.Model
	SyllabusId          uint
	IsPastPaperQuestion int
	PastPaperId         uint
	OrderNumber         int
	Score               int
	QuestionType        int
	Difficult           int
	Describe            string `gorm:"type: text"`
	InfoTextContentId   uint
	Correct             string

	// Request and Response
	QuestionTypeName string                `gorm:"-"`
	SyllabusName     string                `gorm:"-"`
	SyllabusType     int                   `gorm:"-"`
	SyllabusTypeName string                `gorm:"-"`
	SubjectName      string                `gorm:"-"`
	SubjectId        uint                  `gorm:"-"`
	Title            string                `gorm:"-"`
	Analyze          string                `gorm:"-"`
	Items            []QuestionItemObject  `gorm:"-"`
	ChapterInfo      []QuestionChapterInfo `gorm:"-"`
	Chapters         []QuestionChapterInfo `gorm:"-"`
	CorrectArray     []string              `gorm:"-"`
	// PastPaperInfo
	Year   int    `gorm:"-"`
	Series string `gorm:"-"`
	Code   string `gorm:"-"`
}

func (q *Question) SetCorrectFromVM(correct string, correctArray []string) {
	qType := q.QuestionType
	if qType == int(QUESTION_TYPE_MULTIPLE_CHOICE) {
		jsonString, _ := json.Marshal(&correctArray)
		q.Correct = string(jsonString)
	} else {
		q.Correct = correct
	}
}

type QuestionObject struct {
	QuestionObjectItems []QuestionItemObject
	Analyze             string
	TitleContent        string
	Correct             string
}

type QuestionItemObject struct {
	Prefix  string
	Content string
	Score   int
}

type QuestionChapterInfo struct {
	ID          uint
	ChapterId   uint
	ChapterName string
}

type QuestionQuery struct {
	PageIndex           int
	PageSize            int
	SyllabusId          uint
	ID                  uint
	IsPastPaperQuestion int
	PastPaperId         uint
	QuestionType        int
}
