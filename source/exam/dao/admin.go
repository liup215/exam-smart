package dao

import (
	"errors"
	"exam/model"

	"github.com/jinzhu/gorm"
)

func (dao *Dao) AdminCreate(user model.Admin) error {
	if user.ID != uint(0) {
		return errors.New("用户ID必须为空")
	}

	if user.UserName == "" || user.Password == "" {
		return errors.New("用户名或密码不能为空")
	}

	_, err := dao.GetAdminByUserName(user.UserName)
	if err == nil {
		return errors.New("用户名已存在")
	} else {
		return dao.orm.Create(&user).Error
	}

}

func (dao *Dao) GetAdminByUserName(username string) (*model.Admin, error) {

	if username == "" {
		return nil, errors.New("用户名不能为空")
	}
	var user model.Admin
	err := dao.orm.Where(&model.Admin{UserName: username}).First(&user).Error
	if err != nil {
		if err != gorm.ErrRecordNotFound {
			return nil, err
		} else {
			return nil, errors.New("查无此用户")
		}
	}

	return &user, nil
}

func (dao *Dao) AdminPage(request model.AdminQuery) ([]model.Admin, int) {
	list := []model.Admin{}
	total := 0

	db := dao.orm.Model(&model.Admin{})

	if request.UserName != "" {
		db = db.Where("user_name = ?", request.UserName)
	}

	db.Order("id desc").Offset(request.PageSize * (request.PageIndex - 1)).Limit(request.PageSize).Find(&list)

	db.Count(&total)

	return list, total
}
