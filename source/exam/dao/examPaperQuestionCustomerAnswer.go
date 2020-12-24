package dao

import (
	"exam/model"
)

func (dao *Dao) SelectExamPaperQuestionCustomerAnswerAllCount() int {
	count := 0

	dao.orm.Model(&model.ExamPaperQuestionCustomerAnswer{}).Count(&count)

	return count
}
