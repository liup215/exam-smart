package model

import (
	"encoding/json"
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
	Model
	PaperOption
	IsPastPaperQuestion int    `json:"isPastPaperQuestion"`
	PastPaperId         uint   `json:"pastPaperId"`
	OrderNumber         int    `json:"orderNumber"`
	Score               int    `json:"score"`
	QuestionType        int    `json:"questionType"`
	Difficult           int    `json:"difficult"`
	Describe            string `gorm:"type:text" json:"describe"`
	InfoTextContentId   uint   `json:"infoTextContentId"`
	Correct             string `json:"correct"`

	// Request and Response
	QuestionTypeName string                `gorm:"-" json:"questionTypeName"`
	Title            string                `gorm:"-" json:"title"`
	Analyze          string                `gorm:"-" json:"analyze"`
	Items            []QuestionItemObject  `gorm:"-" json:"items"`
	ChapterInfo      []QuestionChapterInfo `gorm:"-" json:"chapterInfo"`
	Chapters         []QuestionChapterInfo `gorm:"-" json:"chapters"`
	CorrectArray     []string              `gorm:"-" json:"correctArray"`
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
	QuestionObjectItems []QuestionItemObject `json:"questionObjectItems"`
	Analyze             string               `json:"analyze"`
	TitleContent        string               `json:"titleContent"`
	Correct             string               `json:"correct"`
}

type QuestionItemObject struct {
	Prefix  string `json:"prefix"`
	Content string `json:"content"`
	Score   int    `json:"score"`
}

type QuestionChapterInfo struct {
	ID          uint   `json:"id"`
	ChapterId   uint   `json:"chapterId"`
	ChapterName string `json:"chapterName"`
}
