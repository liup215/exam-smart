package dao

import (
	"errors"
	"exam/model"

	"github.com/jinzhu/gorm"
)

func (d *Dao) QuestionAdd(question model.Question) (uint, error) {

	if question.ID != uint(0) {
		question.ID = uint(0)
	}
	err := d.orm.Create(&question).Error
	return question.ID, err
}

func (d *Dao) QuestionUpdate(q model.Question) error {
	if q.ID == uint(0) {
		return errors.New("ID不能为空")
	}

	return d.orm.Save(&q).Error
}

func (d *Dao) SelectQuestionAllCount() int {
	count := 0

	d.orm.Model(&model.Question{}).Count(&count)

	return count
}

func (d *Dao) SelectQuestionById(id uint) (*model.Question, error) {
	if id == uint(0) {
		return nil, errors.New("ID不能为空")
	}

	q := model.Question{}
	err := d.orm.Model(&model.Question{}).Where("id = ?", id).First(&q).Error

	return &q, err
}

func (d *Dao) SelectQuestionListByIdsWithNoLimit(ids []uint) ([]model.Question, int) {
	if len(ids) == 0 {
		return []model.Question{}, 0
	}

	db := d.orm.Model(&model.Question{}).Where("id in (?)", ids)

	list := []model.Question{}
	total := 0
	db.Find(&list).Count(&total)

	return list, total
}

func (d *Dao) SelectQuestionList(query model.QuestionQuery) ([]model.Question, int) {

	list := []model.Question{}
	total := 0

	db := d.parseQuestionQuery(query)

	db.Count(&total)

	if query.PageIndex <= 0 {
		query.PageIndex = 1
	}

	if query.PageSize <= 0 {
		query.PageSize = 20
	}

	db.Offset((query.PageIndex - 1) * query.PageSize).Limit(query.PageSize).Find(&list)

	return list, total
}

func (d *Dao) parseQuestionQuery(q model.QuestionQuery) *gorm.DB {
	db := d.orm.Model(&model.Question{})

	if q.ID != 0 {
		db = db.Where("id = ?", q.ID)
	}

	if q.IsPastPaperQuestion != 0 {
		db = db.Where("is_past_paper_question = ?", q.IsPastPaperQuestion)

		if q.PastPaperId != uint(0) {
			db = db.Where("past_paper_id = ?", q.PastPaperId)
		}
	}

	if q.QuestionType != 0 {
		db = db.Where("question_type = ?", q.QuestionType)
	}

	return db
}
