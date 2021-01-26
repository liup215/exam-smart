package model

import ()

type PaperOption struct {
	YearId     uint   `json:"yearId"`
	YearName   string `gorm:"-" json:"yearName"`
	CodeId     uint   `json:"codeId"`
	CodeName   string `gorm:"-" json:"codeName"`
	SeriesId   uint   `json:"seriesId"`
	SeriesName string `gorm:"-" json:"seriesName"`

	// Response
	SyllabusOption
}

type SyllabusOption struct {
	SyllabusId       uint   `json:"syllabusId"`
	SyllabusType     int    `gorm:"-" json:"syllabusType"`
	SyllabusTypeName string `gorm:"-" json:"syllabusTypeName"`
	SyllabusName     string `gorm:"-" json:"syllabusName"`
	SubjectId        uint   `gorm:"-" json:"subjectId"`
	SubjectName      string `gorm:"-" json:"subjectName"`
}

type Year struct {
	Model
	Name string `json:"name"`
}

type YearQuery struct {
	ID        uint `json:"id"`
	PageIndex int  `json:"pageIndex"`
	PageSize  int  `json:"pageSize"`
}

type Series struct {
	Model
	Name string `json:"name"`
	SyllabusOption
}

type SeriesQuery struct {
	ID         uint `json:"id"`
	SyllabusId uint `json:"syllabusId"`
	PageIndex  int  `json:"pageIndex"`
	PageSize   int  `json:"pageSize"`
}

type Code struct {
	Model
	Name string `json:"name"`
	SyllabusOption
}

type CodeQuery struct {
	ID         uint `json:"id"`
	SyllabusId uint `json:"syllabusId"`
	PageIndex  int  `json:"pageIndex"`
	PageSize   int  `json:"pageSize"`
}

type PastPaper struct {
	Model
	Name string `json:"name"`
	PaperOption
}

type PastPaperQuery struct {
	Model
	Name string `json:"name"`
	PaperOption
	PageIndex int `json:"pageIndex"`
	PageSize  int `json:"pageSize"`
}

type ExamPaper struct {
	Model
	Name string `json:"name"` // 试卷名称
	PaperOption
	Score             int  `json:"score"`
	QuestionCount     int  `json:"questionCount"`
	SuggestTime       int  `json:"suggestTime"`
	FrameTexcontentId uint `json:"frameTexcontentId"`
	CreateUser        uint `json:"createUser"`

	// request VM
	TitleItems []ExamPaperTitleItem `gorm:"-" json:"titleItems"`

	// response VM
	CreatedAtFormatted string `gorm:"-" json:"createdAtFormatted"`
}

type ExamPaperQuery struct {
	Model
	Name string `json:"name"` // 试卷名称
	PaperOption
	PageIndex int `json:"pageIndex" form:"pageIndex"`
	PageSize  int `json:"pageSize" form:"pageSize"`
}

type ExamPaperTitleItem struct {
	Name          string                  `json:"name"`
	QuestionItems []ExamPaperQuestionItem `json:"questionItems"`
}

type ExamPaperQuestionItem struct {
	ItemOrder int      `json:"itemOrder"`
	Question  Question `json:"question"`
}
