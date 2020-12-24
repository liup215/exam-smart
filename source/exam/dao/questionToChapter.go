package dao

import (
	"errors"
	"exam/model"

	"github.com/jinzhu/gorm"
)

func (d *Dao) QuestionToChapterAdd(questionToChapter model.QuestionToChapter) (*model.QuestionToChapter, error) {
	if questionToChapter.QuestionId == 0 || questionToChapter.ChapterId == 0 {
		return nil, errors.New("question id 或者 chapter id 不能为空!")
	}

	recorde := 0
	d.orm.Model(model.QuestionToChapter{}).Where("question_id = ?", questionToChapter.QuestionId).Where("chapter_id = ?", questionToChapter.ChapterId).Count(&recorde)
	if recorde != 0 {
		return nil, errors.New("记录已存在.")
	}

	err := d.orm.Create(&questionToChapter).Error
	return &questionToChapter, err
}

func (d *Dao) QuestionToChapterDelete(id uint) error {
	if id == 0 {
		return errors.New("无效的记录")
	}

	return d.orm.Model(&model.QuestionToChapter{}).Where("id = ?", id).Delete(&model.QuestionToChapter{}).Error
}

func (d *Dao) BatchDeleteQuestionToChapterNotIn(ids []int) error {
	if len(ids) == 0 {
		return nil
	}

	return d.orm.Model(&model.QuestionToChapter{}).Not("id", ids).Delete(&model.QuestionToChapter{}).Error
}

func (d *Dao) SelectQuestionToChapterByQuestion(qid uint) []model.QuestionToChapter {
	list := []model.QuestionToChapter{}
	if qid == 0 {
		return nil
	}
	d.orm.Where("question_id = ?", qid).Find(&list)
	return list
}

func (d *Dao) SelectQuestionToChapter(q model.QuestionToChapterQuery) ([]model.QuestionToChapter, int) {
	list := []model.QuestionToChapter{}
	total := 0
	db := d.parseQuestionToChapterQuery(q)

	if err := db.Count(&total).Error; err != nil {
		return []model.QuestionToChapter{}, 0
	}

	if q.PageIndex <= 0 {
		q.PageIndex = 1
	}

	if q.PageSize <= 0 {
		q.PageSize = 20
	}

	if err := db.Offset((q.PageIndex - 1) * q.PageSize).Limit(q.PageSize).Find(&list).Error; err != nil {
		return []model.QuestionToChapter{}, 0
	}

	return list, total
}

func (d *Dao) parseQuestionToChapterQuery(query model.QuestionToChapterQuery) *gorm.DB {
	db := d.orm.Model(&model.QuestionToChapter{})

	if query.Id != 0 {
		db = db.Where("id = ?", query.Id)
	}

	if query.QuestionId != 0 {
		db = db.Where("question_id = ?", query.QuestionId)
	}

	if query.ChapterId != 0 {
		db = db.Where("chapter_id = ?", query.ChapterId)
	}

	return db
}
