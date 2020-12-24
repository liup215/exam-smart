package service

import (
	"exam/conf"
	"exam/dao"
)

type Service struct {
	dao *dao.Dao
}

func New(cf *conf.Config) *Service {
	return &Service{
		dao: dao.New(cf),
	}
}
