package service

func (svr *Service) SelectExamPaperQuestionCustomerAnswerAllCount() int {
	return svr.dao.SelectExamPaperQuestionCustomerAnswerAllCount()
}
