package service

import (
	"errors"

	"exam/model"
)

func (svr *Service) SyllabusList(query model.SyllabusQuery) ([]model.Syllabus, int) {
	list, total := svr.dao.SelectSyllabusList(query)
	for i, v := range list {
		if subj, err := svr.SelectSubjectById(v.SubjectId); err == nil {
			list[i].SubjectName = subj.Name
		}
		if v.Type == model.SYLLABUS_TYPE_CIE {
			list[i].TypeName = "CAIE"
		} else if v.Type == model.SYLLABUS_TYPE_EDX {
			list[i].TypeName = "Edexcel"
		}
	}
	return list, total
}

func (svr *Service) SelectSyllabusById(id uint) (*model.Syllabus, error) {
	return svr.dao.SelectSyllabusOne(model.SyllabusQuery{ID: id})
}

func (svr *Service) SyllabusAdd(syllabus model.Syllabus) error {
	if syllabus.ID != 0 {
		return errors.New("无效的书籍ID")
	}
	return svr.dao.SyllabusAdd(syllabus)
}

func (svr *Service) SyllabusUpdate(syllabus model.Syllabus) error {
	if syllabus.ID == 0 {
		return errors.New("书籍ID不能为空")
	}
	return svr.dao.SyllabusUpdate(syllabus)
}
