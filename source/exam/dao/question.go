package dao

import (
	"exam/model"

	"github.com/jinzhu/gorm"
)

type QuestionQuery struct {
	model.Model
	SyllabusId          uint `json:"syllabusId"`
	IsPastPaperQuestion int  `json:"isPastPaperQuestion"`
	PastPaperId         uint `json:"pastPaperId"`
	QuestionType        int  `json:"questionType"`
	Page
}

func (q QuestionQuery) ParseQuery(db *gorm.DB) *gorm.DB {
	db = db.Model(&model.Question{})
	if q.ID != 0 {
		db = db.Where("id = ?", q.ID)
	}

	if q.IsPastPaperQuestion != 0 {
		db = db.Where("is_past_paper_question = ?", q.IsPastPaperQuestion)

		if q.PastPaperId != uint(0) {
			db = db.Where("past_paper_id = ?", q.PastPaperId)
		}
	}

	if q.SyllabusId != uint(0) {
		db = db.Where("syllabus_id = ?", q.SyllabusId)
	}

	if q.QuestionType != 0 {
		db = db.Where("question_type = ?", q.QuestionType)
	}

	return db
}
