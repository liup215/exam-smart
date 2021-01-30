package service

import (
	"exam/dao"
	"exam/model"
)

func (s *Service) GetUserByUserName(username string) (*model.Admin, error) {
	return nil, nil
}

func (s *Service) UserPage(q dao.AdminQuery) ([]model.Admin, int) {

	list := []model.Admin{}
	total := 0
	s.dao.SelectList(&list, &total, q)
	return list, total
}
