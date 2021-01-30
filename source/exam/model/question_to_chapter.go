package model

import ()

type QuestionToChapter struct {
	Model
	QuestionId uint `json:"questionId"`
	ChapterId  uint `json:"chapterId"`
}
