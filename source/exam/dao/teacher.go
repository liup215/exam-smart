package dao

import (
	"errors"
	"exam/model"

	"github.com/jinzhu/gorm"
)

func (dao *Dao) TeacherCreate(user model.Teacher) error {
	if user.ID != uint(0) {
		return errors.New("用户ID必须为空")
	}

	if user.UserName == "" || user.Password == "" {
		return errors.New("用户名或密码不能为空")
	}

	_, err := dao.GetTeacherByUserName(user.UserName)
	if err == nil {
		return errors.New("用户名已存在")
	} else {
		return dao.orm.Create(&user).Error
	}

}

func (dao *Dao) GetTeacherByUserName(username string) (*model.Teacher, error) {

	if username == "" {
		return nil, errors.New("用户名不能为空")
	}
	var user model.Teacher
	err := dao.orm.Where(&model.Teacher{UserName: username}).First(&user).Error
	if err != nil {
		if err != gorm.ErrRecordNotFound {
			return nil, err
		} else {
			return nil, errors.New("查无此用户")
		}
	}

	return &user, nil
}

func (dao *Dao) TeacherPage(request model.TeacherQuery) ([]model.Teacher, int) {
	list := []model.Teacher{}
	total := 0

	db := dao.orm.Model(&model.Teacher{})

	if request.UserName != "" {
		db = db.Where("user_name = ?", request.UserName)
	}

	db.Order("id desc").Offset(request.PageSize * (request.PageIndex - 1)).Limit(request.PageSize).Find(&list)

	db.Count(&total)

	return list, total
}
