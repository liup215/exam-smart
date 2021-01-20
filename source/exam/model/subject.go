package model

import ()

type Subject struct {
	Model
	Name      string `json:"name"`      // 语文 数学 英语 等
	ItemOrder int    `json:"itemOrder"` // 排序
}

type SubjectQuery struct {
	PageIndex int `json:"pageIndex"`
	PageSize  int `json:"pageSize"`
}
