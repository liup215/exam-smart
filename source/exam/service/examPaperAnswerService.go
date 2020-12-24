package service

func (svr *Service) SelectExamPaperAnswerAllCount() int {
	return svr.dao.SelectExamPaperAnswerAllCount()
}
