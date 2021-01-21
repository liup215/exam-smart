package model

import ()

type Admin struct {
	Model
	UserName string `form:"userName" json:"userName"` // 用户名
	Password string `form:"-" json:"-"`
	Salt     string `form:"-" json:"-"`
	RealName string `form:"realName" json:"realName"` // 真实姓名
	Phone    string `form:"phone" json:"phone"`
	Status   int    `form:"status" json:"status"` // 1.启用 2禁用
}

type AdminQuery struct {
	UserName  string `json:"userName"`
	PageIndex int    `json:"pageIndex"`
	PageSize  int    `json:"pageSize"`
}

type AdminPageRequest struct {
	UserName  string `json:"userName"`
	PageIndex int    `json:"pageIndex"`
	PageSize  int    `json:"pageSize"`
}

const (
	USER_STATUS_ENABLE  = 1
	USER_STATUS_DISABLE = 2
)
