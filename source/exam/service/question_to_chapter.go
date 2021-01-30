package service

import (
	"errors"
	"exam/dao"
	"exam/model"
)

func (svr *Service) QuestionToChapterAdd(questionToChapter model.QuestionToChapter) (*model.QuestionChapterInfo, error) {
	if questionToChapter.ID != uint(0) {
		return nil, errors.New("ID不能为空!")
	}

	if questionToChapter.ChapterId == uint(0) || questionToChapter.QuestionId == uint(0) {
		return nil, errors.New("无效的章节或问题ID")
	}

	if err := svr.dao.Create(&questionToChapter, dao.QuestionToChapterQuery{}); err != nil {
		return nil, err
	}

	chapter := model.Chapter{}
	err := svr.dao.SelectOne(&chapter, dao.ChapterQuery{ID: questionToChapter.ChapterId})
	return &model.QuestionChapterInfo{
		ChapterId:   chapter.ID,
		ChapterName: chapter.Name,
		ID:          questionToChapter.ID,
	}, err
}

func (svr *Service) QuestionToChapterDelete(id uint) error {
	if id == uint(0) {
		return errors.New("ID不能为空")
	}

	return svr.dao.Delete(model.QuestionToChapter{Model: model.Model{ID: id}}, dao.QuestionToChapterQuery{})
}
