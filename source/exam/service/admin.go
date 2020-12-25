package service

import (
	"exam/model"
)

func (s *Service) GetUserByUserName(username string) (*model.Admin, error) {
	return nil, nil
}

func (s *Service) UserPage(request model.AdminQuery) ([]model.Admin, int) {
	return s.dao.AdminPage(request)
}
