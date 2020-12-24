package service

import (
	"encoding/json"
	"errors"
	"exam/model"
)

func (svr *Service) SelectExamPaperAllCount() int {
	return svr.dao.SelectExamPaperAllCount()
}

func (svr *Service) ExamPaperList(query model.ExamPaperQuery) ([]model.ExamPaper, int) {
	list, total := svr.dao.SelectExamPaperList(query)

	for i, p := range list {
		list[i] = svr.examPaperFormat(p)
	}

	return list, total
}

func (svr *Service) ExamPaperById(id uint) (model.ExamPaper, error) {
	if id == uint(0) {
		return model.ExamPaper{}, errors.New("试卷ID不能为空")
	}

	paper, err := svr.dao.SelectExamPaperById(id)
	return svr.examPaperFormat(paper), err
}

func (svr *Service) examPaperFormat(p model.ExamPaper) model.ExamPaper {
	slbs, _ := svr.dao.SelectSyllabusById(p.SyllabusId)
	p.SyllabusTypeName = slbs.GetSyllabusTypeName()
	p.SyllabusType = slbs.Type
	p.SyllabusName = slbs.Name

	// 格式化科目
	sub, _ := svr.dao.SelectSubjectById(slbs.SubjectId)
	p.SubjectId = slbs.SubjectId
	p.SubjectName = sub.Name

	// 格式化创建时间
	p.CreatedAtFormatted = p.CreatedAt.Format("2006 01 02 15:04:05")

	textContent, _ := svr.dao.TextContentById(p.FrameTexcontentId)
	examPaperTitleItems := []model.ExamPaperTitleItem{}
	json.Unmarshal([]byte(textContent.Content), &examPaperTitleItems)

	p.TitleItems = examPaperTitleItems
	return p
}

func (svr *Service) SavePaper(examPaper model.ExamPaper) (model.ExamPaper, error) {
	titleItemsVM := examPaper.TitleItems

	frameTextContentStrByte, err := json.Marshal(&titleItemsVM)
	if err != nil {
		return model.ExamPaper{}, errors.New("试卷题目信息转换错误, " + err.Error())
	}

	frameTextContentStr := string(frameTextContentStrByte)

	if examPaper.ID == 0 {

		textContext := model.TextContent{Content: frameTextContentStr}
		textContextId, err := svr.dao.TextContentAdd(textContext)
		if err != nil {
			return model.ExamPaper{}, errors.New("题目信息存储失败, " + err.Error())
		}

		examPaper.FrameTexcontentId = textContextId
		svr.examPaperFromVM(&examPaper, titleItemsVM)
		ep, err := svr.dao.ExamPaperAdd(examPaper)
		if err != nil {
			return model.ExamPaper{}, nil
		}

		examPaper = *ep
	} else {
		record, err := svr.dao.SelectExamPaperById(examPaper.ID)
		if err != nil {
			return model.ExamPaper{}, errors.New("试卷查询失败, " + err.Error())
		}

		record.Name = examPaper.Name
		record.SyllabusId = examPaper.SyllabusId
		record.SuggestTime = examPaper.SuggestTime

		textContext, err := svr.dao.TextContentById(examPaper.FrameTexcontentId)
		if err != nil {
			return model.ExamPaper{}, errors.New("试卷内容查询失败, " + err.Error())
		}

		textContext.Content = frameTextContentStr
		if svr.dao.TextContentUpdate(*textContext) != nil {
			return model.ExamPaper{}, errors.New("试卷内容更新失败, " + err.Error())
		}

		svr.examPaperFromVM(&record, titleItemsVM)

		ep, err := svr.dao.ExamPaperUpdate(record)
		if err != nil {
			return model.ExamPaper{}, nil
		}

		examPaper = *ep
	}

	return examPaper, nil

}

func (svr *Service) examPaperFromVM(examPaper *model.ExamPaper, titleItemsVM []model.ExamPaperTitleItem) {
	questionCount := 0
	score := 0
	for _, titleItems := range titleItemsVM {
		questionCount = questionCount + len(titleItems.QuestionItems)
		for _, q := range titleItems.QuestionItems {
			score = score + q.Question.Score
		}
	}

	examPaper.QuestionCount = questionCount
	examPaper.Score = score
}
