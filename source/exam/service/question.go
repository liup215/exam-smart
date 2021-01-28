package service

import (
	"encoding/json"
	"errors"
	"exam/dao"
	"exam/model"
)

func (svr *Service) SelectQuestionAllCount() int {
	return svr.dao.SelectQuestionAllCount()
}

func (svr *Service) SelectQuestionAllByQuery(q model.QuestionQuery) ([]model.Question, int) {
	list := []model.Question{}
	total := 0
	svr.dao.SelectAll(&list, &total, dao.QuestionMapper{QuestionQuery: q})

	return list, total
}

func (svr *Service) SelectQuestionList(query model.QuestionQuery) ([]model.Question, int) {
	list := []model.Question{}
	questionList, total := svr.dao.SelectQuestionList(query)

	for _, q := range questionList {
		err := svr.buildQuestion(&q)
		if err != nil {
			continue
		}
		list = append(list, q)
	}

	return list, total
}

func (svr *Service) QuestionById(id uint) (*model.Question, error) {
	if id == uint(0) {
		return nil, errors.New("ID不能为空!")
	}

	question, err := svr.dao.SelectQuestionById(id)
	if err != nil {
		return nil, err
	}
	err = svr.buildQuestion(question)

	return question, err
}

func (svr *Service) buildQuestion(q *model.Question) error {

	q.QuestionTypeName = model.QuestionTypeMap()[q.QuestionType]

	syllabusOption := svr.buildSyllabusOptionById(q.SyllabusId)
	q.SyllabusOption = syllabusOption

	textContent, err := svr.dao.TextContentById(q.InfoTextContentId)
	if err != nil {
		return err
	}

	questionObject := model.QuestionObject{}

	if err := json.Unmarshal([]byte(textContent.Content), &questionObject); err != nil {
		return err
	}

	q.Title = questionObject.TitleContent
	q.Analyze = questionObject.Analyze
	q.Items = questionObject.QuestionObjectItems

	// 返回真题信息
	if q.IsPastPaperQuestion == 1 && q.PastPaperId != 0 {
		pastPaper, _ := svr.dao.PastPaperById(q.PastPaperId)
		q.YearId = pastPaper.YearId
		q.CodeId = pastPaper.CodeId
		q.SeriesId = pastPaper.SeriesId
	}

	// 返回题目章节信息
	chapterList := []model.QuestionChapterInfo{}

	chapterToQuestionList := svr.dao.SelectQuestionToChapterByQuestion(q.ID)

	for _, chapterToQuestion := range chapterToQuestionList {
		chapter, err := svr.dao.SelectChapterById(chapterToQuestion.ChapterId)
		if err != nil {
			continue
		}
		chapterList = append(chapterList, model.QuestionChapterInfo{
			ID:          chapterToQuestion.ID,
			ChapterId:   chapter.ID,
			ChapterName: chapter.Name,
		})

	}

	q.Chapters = chapterList

	return nil
}

func (svr *Service) QuestionEdit(q model.Question) error {
	if q.ID == uint(0) {
		return errors.New("ID不能为空")
	}
	question, err := svr.dao.SelectQuestionById(q.ID)

	if err != nil {
		return errors.New("查无此问题！")
	}

	question.SyllabusId = q.SyllabusId
	question.Score = q.Score
	question.Difficult = q.Difficult
	question.IsPastPaperQuestion = q.IsPastPaperQuestion
	if question.IsPastPaperQuestion == 1 {
		if q.PastPaperId == uint(0) {
			return errors.New("该问题是往年真题，请设置正确的试卷代号。")
		}
		question.PastPaperId = q.PastPaperId
	}

	question.SetCorrectFromVM(q.Correct, q.CorrectArray)

	if err := svr.dao.QuestionUpdate(*question); err != nil {
		return err
	}

	textContent, err := svr.dao.TextContentById(question.InfoTextContentId)
	if err != nil {
		return errors.New("试题内容查询失败!")
	}

	svr.setQuestionInfoFromVM(textContent, q)
	if err := svr.dao.TextContentUpdate(*textContent); err != nil {
		return err
	}
	return nil
}

func (svr *Service) QuestionAdd(q model.Question) error {
	text := model.TextContent{}
	svr.setQuestionInfoFromVM(&text, q)

	txtID, _ := svr.dao.TextContentAdd(text)

	q.InfoTextContentId = txtID

	q.SetCorrectFromVM(q.Correct, q.CorrectArray)

	_, err := svr.dao.QuestionAdd(q)

	return err
}

func (svr *Service) QuestionUpdate(q model.Question) error {
	return svr.dao.QuestionUpdate(q)
}

func (svr *Service) setQuestionInfoFromVM(infoTextContent *model.TextContent, vm model.Question) {
	itemObjects := []model.QuestionItemObject{}

	for _, v := range vm.Items {
		itemObjects = append(itemObjects, v)
	}

	questionObject := model.QuestionObject{
		QuestionObjectItems: itemObjects,
		Analyze:             vm.Analyze,
		TitleContent:        vm.Title,
		Correct:             vm.Correct,
	}

	jsonByte, _ := json.Marshal(&questionObject)
	infoTextContent.Content = string(jsonByte)

}
