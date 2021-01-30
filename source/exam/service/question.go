package service

import (
	"encoding/json"
	"errors"
	"exam/dao"
	"exam/model"
)

func (svr *Service) SelectQuestionAllCount() int {
	return svr.dao.Count(dao.QuestionQuery{})
}

func (svr *Service) SelectQuestionAllByQuery(q dao.QuestionQuery) ([]model.Question, int) {
	list := []model.Question{}
	total := 0
	svr.dao.SelectAll(&list, &total, q)

	return list, total
}

func (svr *Service) SelectQuestionList(query dao.QuestionQuery) ([]model.Question, int) {
	list := []model.Question{}
	total := 0
	svr.dao.SelectList(&list, &total, query)

	for i, q := range list {
		if err := svr.buildQuestion(&q); err != nil {
			continue
		}
		list[i] = q
	}

	return list, total
}

func (svr *Service) QuestionById(id uint) (model.Question, error) {
	if id == uint(0) {
		return model.Question{}, errors.New("ID不能为空!")
	}

	question := model.Question{}
	err := svr.dao.SelectOne(&question, dao.QuestionQuery{Model: model.Model{ID: id}})
	if err != nil {
		return model.Question{}, err
	}
	err = svr.buildQuestion(&question)

	return question, err
}

func (svr *Service) buildQuestion(q *model.Question) error {

	q.QuestionTypeName = model.QuestionTypeMap()[q.QuestionType]

	syllabusOption := svr.buildSyllabusOptionById(q.SyllabusId)
	q.SyllabusOption = syllabusOption

	textContent := model.TextContent{}
	if err := svr.dao.SelectOne(&textContent, dao.TextContentQuery{Model: model.Model{ID: q.InfoTextContentId}}); err != nil {
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
		pastPaper, _ := svr.PastPaperById(q.PastPaperId)
		q.YearId = pastPaper.YearId
		q.YearName = pastPaper.YearName
		q.CodeId = pastPaper.CodeId
		q.CodeName = pastPaper.CodeName
		q.SeriesId = pastPaper.SeriesId
		q.SeriesName = pastPaper.SeriesName
	}

	// 返回题目章节信息
	chapterList := []model.QuestionChapterInfo{}
	chapterToQuestionList := []model.QuestionToChapter{}
	total := 0
	svr.dao.SelectAll(&chapterToQuestionList, &total, dao.QuestionToChapterQuery{QuestionId: q.ID})

	for _, chapterToQuestion := range chapterToQuestionList {
		chapter := model.Chapter{}
		err := svr.dao.SelectOne(&chapter, dao.ChapterQuery{ID: chapterToQuestion.ChapterId})
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
	question := model.Question{}
	if err := svr.dao.SelectOne(&question, dao.QuestionQuery{Model: model.Model{ID: q.ID}}); err != nil {
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

	if err := svr.dao.Save(&question, dao.QuestionQuery{Model: model.Model{ID: q.ID}}); err != nil {
		return err
	}

	textContent := model.TextContent{}
	if err := svr.dao.SelectOne(&textContent, dao.TextContentQuery{Model: model.Model{ID: question.InfoTextContentId}}); err != nil {
		return errors.New("试题内容查询失败!")
	}

	svr.setQuestionInfoFromVM(&textContent, q)
	if err := svr.dao.Save(&textContent, dao.TextContentQuery{Model: model.Model{ID: textContent.ID}}); err != nil {
		return err
	}
	return nil
}

func (svr *Service) QuestionAdd(q model.Question) error {
	if q.ID != uint(0) {
		q.ID = uint(0)
	}
	text := model.TextContent{}
	svr.setQuestionInfoFromVM(&text, q)

	if err := svr.dao.Create(&text, dao.TextContentQuery{}); err != nil {
		return err
	}
	txtID := text.ID

	q.InfoTextContentId = txtID

	q.SetCorrectFromVM(q.Correct, q.CorrectArray)

	return svr.dao.Create(&q, dao.QuestionQuery{})

}

func (svr *Service) QuestionUpdate(q model.Question) error {
	if q.ID == uint(0) {
		return errors.New("无效的ID")
	}
	return svr.dao.Save(&q, dao.QuestionQuery{})
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
