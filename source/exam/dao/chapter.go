package dao

import (
	"exam/model"

	"github.com/jinzhu/gorm"
)

type ChapterQuery struct {
	ID         uint `json:"id"`
	SyllabusId uint `json:"syllabusId"`
	ParentId   uint `json:"parentId"`
	Page
}

func (q ChapterQuery) ParseQuery(db *gorm.DB) *gorm.DB {
	db = db.Model(&model.Chapter{})

	if q.ID != 0 {
		db = db.Where("id = ?", q.ID)
	}

	if q.SyllabusId != 0 {
		db = db.Where("syllabus_id = ?", q.SyllabusId)
	}

	if q.ParentId != 0 {
		db = db.Where("parent_id = ?", q.ParentId)
	}

	return db
}

/*
func (dao *Dao) SelectChapterById(id uint) (model.Chapter, error) {
	result := model.Chapter{}
	if id < 0 {
		return result, errors.New("章节id无效")
	}

	err := dao.orm.Model(&model.Chapter{}).Where("id = ?", id).First(&result).Error
	if err == nil {
		return result, err
	}

	if err == gorm.ErrRecordNotFound {
		return result, errors.New("查无该书籍")
	} else {
		return result, err
	}
}

func (dao *Dao) SelectChapterList(query model.ChapterQuery) ([]model.Chapter, int) {
	list := []model.Chapter{}
	total := 0

	db := dao.parseChapterQuery(query)

	if query.PageIndex < 1 {
		query.PageIndex = 1
	}

	if query.PageSize < 1 {
		query.PageSize = 10
	}

	db.Order("id desc").Offset((query.PageIndex - 1) * query.PageSize).Limit(query.PageSize).Find(&list)

	db.Order("id desc").Count(&total)

	return list, total
}

func (dao *Dao) SelectChapterByParentIdAndSyllabusId(parentId, bookId uint) []model.Chapter {
	list := []model.Chapter{}
	dao.orm.Model(&model.Chapter{}).Where("parent_id = ?", parentId).Where("syllabus_id = ?", bookId).Find(&list)
	return list
}

func (dao *Dao) parseChapterQuery(query model.ChapterQuery) *gorm.DB {
	db := dao.orm.Model(&model.Chapter{})

	if query.ID != 0 {
		db = db.Where("id = ?", query.ID)
	}

	if query.SyllabusId != 0 {
		db = db.Where("syllabus_id = ?", query.SyllabusId)
	}

	if query.ParentId != 0 {
		db = db.Where("parent_id = ?", query.ParentId)
	}

	return db
}

func (dao *Dao) ChapterAdd(chapter model.Chapter) error {
	if chapter.ID != 0 {
		return errors.New("新增章节ID必须为空")
	}

	return dao.orm.Model(&model.Chapter{}).Create(&chapter).Error
}

func (dao *Dao) ChapterUpdate(chapter model.Chapter) error {
	if chapter.ID == 0 {
		return errors.New("无效的章节ID")
	}

	return dao.orm.Model(&model.Chapter{}).Save(&chapter).Error
}

func (dao *Dao) ChapterDelete(id uint) error {
	if id == 0 {
		return errors.New("无效的章节ID")
	}

	total := 0
	dao.orm.Model(&model.Chapter{}).Where(&model.Chapter{ParentId: id}).Count(&total)

	if total > 0 {
		return errors.New("该章节下有子章节，不能删除")
	}

	return dao.orm.Model(&model.Chapter{}).Delete(&model.Chapter{Model: model.Model{ID: id}}).Error
}

func (dao *Dao) ChapterListBySyllabus(sid uint) ([]model.Chapter, int) {
	list := []model.Chapter{}
	total := 0
	if sid == uint(0) {
		return list, total
	}

	db := dao.orm.Model(&model.Chapter{}).Where(&model.Chapter{SyllabusId: sid})
	db.Find(&list)
	db.Count(&total)

	return list, total
}

*/
