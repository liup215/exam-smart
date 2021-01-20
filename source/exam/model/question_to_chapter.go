package model

import ()

type QuestionToChapter struct {
	Model
	QuestionId uint `json:"questionId"`
	ChapterId  uint `json:"chapterId"`
}

type QuestionToChapterQuery struct {
	Id         uint `json:"id"`
	QuestionId uint `json:"questionId"`
	ChapterId  uint `json:"chapterId"`
	PageIndex  int  `json:"pageIndex"`
	PageSize   int  `json:"pageSize"`
}
