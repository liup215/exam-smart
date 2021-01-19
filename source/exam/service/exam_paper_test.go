package service

import (
	"exam/conf"
	"testing"
)

var svr *Service

func init() {
	err := conf.Init()
	if err != nil {
		panic("系统错误!")
	}
	svr = New(conf.Conf)
}

func TestExamPaperExportToDox(t *testing.T) {
	path, err := svr.ExamPaperExportToDox(uint(1))
	if err != nil {
		t.Error(err.Error())
	}

	t.Error(path)
}
