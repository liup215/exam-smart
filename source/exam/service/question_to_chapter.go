package service

import (
	"errors"
	"exam/model"
)

func (svr *Service) QuestionToChapterAdd(questionToChapter model.QuestionToChapter) (*model.QuestionChapterInfo, error) {
	if questionToChapter.ID != uint(0) {
		return nil, errors.New("ID不能为空!")
	}

	if questionToChapter.ChapterId == uint(0) || questionToChapter.QuestionId == uint(0) {
		return nil, errors.New("无效的章节或问题ID")
	}

	qToC, err := svr.dao.QuestionToChapterAdd(questionToChapter)
	if err != nil {
		return nil, err
	}

	chapter, _ := svr.dao.SelectChapterById(qToC.ChapterId)
	return &model.QuestionChapterInfo{
		ChapterId:   chapter.ID,
		ChapterName: chapter.Name,
		ID:          qToC.ID,
	}, nil

}

func (svr *Service) QuestionToChapterDelete(id uint) error {
	if id == uint(0) {
		return errors.New("ID不能为空")
	}

	return svr.dao.QuestionToChapterDelete(id)
}
