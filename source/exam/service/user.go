package service

import (
	"exam/model"
)

func (user *Service) GetUserByUserName(username string) (*model.User, error) {
	return nil, nil
}

func (user *Service) UserPage(request model.UserQuery) ([]model.User, int) {
	return user.dao.UserPage(request)
}
