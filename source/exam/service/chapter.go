package service

import (
	"errors"
	"exam/dao"
	"exam/model"
)

func (s *Service) ChapterList(q dao.ChapterQuery) ([]model.Chapter, int) {
	list := []model.Chapter{}
	total := 0
	s.dao.SelectList(&list, &total, q)
	return list, total
}

func (svr *Service) ChapterTree(sId uint) []model.Chapter {

	return svr.buildChapterTree(0, sId)
}

func (s *Service) buildChapterTree(parentId, syllabusId uint) []model.Chapter {
	list := []model.Chapter{}
	total := 0
	s.dao.SelectAll(&list, &total, dao.ChapterQuery{ParentId: parentId, SyllabusId: syllabusId})
	for i, chapter := range list {
		children := s.buildChapterTree(chapter.ID, syllabusId)
		if len(children) == 0 {
			list[i].IsLeaf = 1
		}
		list[i].Children = children
	}
	return list
}

func (s *Service) ChapterAdd(chapter model.Chapter) error {
	if chapter.ID != uint(0) {
		chapter.ID = uint(0)
	}

	return s.dao.Create(chapter, dao.ChapterQuery{})
}

func (s *Service) ChapterUpdate(chapter model.Chapter) error {
	return s.dao.Update(chapter, dao.ChapterQuery{})
}

func (s *Service) ChapterDelete(id uint) error {
	if id == uint(0) {
		return errors.New("无效的ID")
	}

	return s.dao.Delete(model.Chapter{Model: model.Model{ID: id}}, dao.ChapterQuery{})
}

func (s *Service) ChapterListBySyllabus(sid uint) ([]model.Chapter, int) {
	list := []model.Chapter{}
	total := 0
	s.dao.SelectList(&list, &total, dao.ChapterQuery{SyllabusId: sid})
	return list, total
}

func (s *Service) ChapterById(id uint) (model.Chapter, error) {
	c := model.Chapter{}

	if id == uint(0) {
		return c, errors.New("无效的ID")
	}

	err := s.dao.SelectOne(&c, dao.ChapterQuery{ID: id})
	return c, err
}
