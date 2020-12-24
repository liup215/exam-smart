package base

import (
	"exam/conf"
	"exam/service"
)

var Svr *service.Service

func init() {
	Svr = service.New(conf.Conf)
}
