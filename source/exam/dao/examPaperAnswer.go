package dao

import (
	"exam/model"
)

func (dao *Dao) SelectExamPaperAnswerAllCount() int {
	count := 0

	dao.orm.Model(&model.ExamPaperAnswer{}).Count(&count)

	return count
}
