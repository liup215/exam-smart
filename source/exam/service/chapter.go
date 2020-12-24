package service

import (
	//"errors"
	"exam/model"
)

func (svr *Service) ChapterList(query model.ChapterQuery) ([]model.Chapter, int) {
	return svr.dao.SelectChapterList(query)
}

func (svr *Service) ChapterTree(sId uint) []model.Chapter {

	return svr.buildChapterTree(0, sId)
}

func (svr *Service) buildChapterTree(parentId, bookId uint) []model.Chapter {
	list := svr.dao.SelectChapterByParentIdAndSyllabusId(parentId, bookId)
	for i, chapter := range list {
		children := svr.buildChapterTree(chapter.ID, bookId)
		if len(children) == 0 {
			list[i].IsLeaf = 1
		}
		list[i].Children = children
	}
	return list
}

func (svr *Service) ChapterAdd(chapter model.Chapter) error {
	return svr.dao.ChapterAdd(chapter)
}

func (svr *Service) ChapterUpdate(chapter model.Chapter) error {
	return svr.dao.ChapterUpdate(chapter)
}

func (svr *Service) ChapterDelete(id uint) error {
	return svr.dao.ChapterDelete(id)
}

func (svr *Service) ChapterListBySyllabus(sid uint) ([]model.Chapter, int) {
	return svr.dao.ChapterListBySyllabus(sid)
}

func (svr *Service) ChapterById(id uint) (model.Chapter, error) {
	return svr.dao.SelectChapterById(id)
}
