package model

import ()

type PastPaper struct {
	Model
	Name       string `json:"name"`
	SyllabusId uint   `json:"syllabusId"`
	Year       int    `json:"year"`
	Code       string `json:"code"`
	Series     string `json:"series"`

	// Response
	SyllabusType     int    `gorm:"-" json:"syllabusType"`
	SyllabusTypeName string `gorm:"-" json:"syllabusTypeName"`
	SyllabusName     string `gorm:"-" json:"syllabusName"`
	SubjectId        uint   `gorm:"-" json:"subjectId"`
	SubjectName      string `gorm:"-" json:"subjectName"`
}

type PastPaperQuery struct {
	ID         uint   `json:"id"`
	SyllabusId uint   `json:"syllabusId"`
	Year       int    `json:"year"`
	Code       string `json:"code"`
	Series     string `json:"series"`
	PageIndex  int    `json:"pageIndex"`
	PageSize   int    `json:"pageSize"`
}

type ExamPaper struct {
	Model
	Name              string `json:"name"` // 试卷名称
	SyllabusId        uint   `json:"syllabusId"`
	Score             int    `json:"score"`
	QuestionCount     int    `json:"questionCount"`
	SuggestTime       int    `json:"suggestTime"`
	FrameTexcontentId uint   `json:"frameTexcontentId"`
	CreateUser        uint   `json:"createUser"`

	// request VM
	TitleItems []ExamPaperTitleItem `gorm:"-" json:"titleItems"`

	// response VM
	CreatedAtFormatted string `gorm:"-" json:"createdAtFormatted"`
	SyllabusName       string `gorm:"-" json:"syllabusName"`
	SyllabusType       int    `gorm:"-" json:"syllabusType"`
	SyllabusTypeName   string `gorm:"-" json:"syllabusTypeName"`
	SubjectId          uint   `gorm:"-" json:"subjectId"`
	SubjectName        string `gorm:"-" json:"subjectName"`
}

type ExamPaperQuery struct {
	ID         uint `json:"id"`
	SyllabusId uint `json:"syllabusId"`
	PageIndex  int  `json:"pageIndex" form:"pageIndex"`
	PageSize   int  `json:"pageSize" form:"pageSize"`
}

type ExamPaperTitleItem struct {
	Name          string                  `json:"name"`
	QuestionItems []ExamPaperQuestionItem `json:"questionItems"`
}

type ExamPaperQuestionItem struct {
	ItemOrder int      `json:"itemOrder"`
	Question  Question `json:"question"`
}
