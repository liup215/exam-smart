package dao

import (
	"errors"
	"exam/model"

	"github.com/jinzhu/gorm"
)

func (dao *Dao) UserCreate(user model.User) error {
	if user.ID != uint(0) {
		return errors.New("用户ID必须为空")
	}

	if user.UserName == "" || user.Password == "" {
		return errors.New("用户名或密码不能为空")
	}

	_, err := dao.GetUserByUserName(user.UserName)
	if err == nil {
		return errors.New("用户名已存在")
	} else {
		return dao.orm.Create(&user).Error
	}

}

func (dao *Dao) GetUserByUserName(username string) (*model.User, error) {

	if username == "" {
		return nil, errors.New("用户名不能为空")
	}
	var user model.User
	err := dao.orm.Where(&model.User{UserName: username}).First(&user).Error
	if err != nil {
		if err != gorm.ErrRecordNotFound {
			return nil, err
		} else {
			return nil, errors.New("查无此用户")
		}
	}

	return &user, nil
}

func (dao *Dao) UserPage(request model.UserQuery) ([]model.User, int) {
	list := []model.User{}
	total := 0

	db := dao.orm.Model(&model.User{})

	if request.UserName != "" {
		db = db.Where("user_name = ?", request.UserName)
	}

	if request.Role != 0 {
		db = db.Where("role = ?", request.Role)
	}

	db.Order("id desc").Offset(request.PageSize * (request.PageIndex - 1)).Limit(request.PageSize).Find(&list)

	db.Count(&total)

	return list, total
}
