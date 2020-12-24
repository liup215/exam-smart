package model

import (
	"exam/lib/database/data"

	"github.com/jinzhu/gorm"
)

type UserEventLog struct {
	Id         int           `form:"id" json:"id" gorm:"primary_key;AUTO_INCREMENT"`
	UserId     int           `form:"userId" json:"userId"`         // 用户id
	UserName   string        `form:"userName" json:"userName"`     // 用户名
	RealName   string        `form:"realName" json:"realName"`     // 真实姓名
	Content    string        `form:"content" json:"content"`       // 内容
	CreateTime data.DateTime `form:"createTime" json:"createTime"` // 时间
}

type UserToken struct {
	Id         int           `form:"id" json:"id" gorm:"primary_key;AUTO_INCREMENT"`
	Token      string        `form:"token" json:"token"`
	UserId     int           `form:"userId" json:"userId"`     // 用户Id
	WxOpenId   string        `form:"wxOpenId" json:"wxOpenId"` // 微信openId
	CreateTime data.DateTime `form:"createTime" json:"createTime"`
	EndTime    string        `form:"endTime" json:"endTime"`
	UserName   string        `form:"userName" json:"userName"` // 用户名
}

type User struct {
	gorm.Model
	UserName  string `form:"userName" json:"userName"` // 用户名
	Password  string `form:"password" json:"password"`
	RealName  string `form:"realName" json:"realName"` // 真实姓名
	Age       int    `form:"age" json:"age"`
	Sex       int    `form:"sex" json:"sex"` // 1.男 2女
	BirthDay  string `form:"birthDay" json:"birthDay"`
	UserLevel int    `form:"userLevel" json:"userLevel"` // 学生年级(1-12)
	Phone     string `form:"phone" json:"phone"`
	Role      int    `form:"role" json:"role"`           // 1.学生 2.老师 3.管理员
	Status    int    `form:"status" json:"status"`       // 1.启用 2禁用
	ImagePath string `form:"imagePath" json:"imagePath"` // 头像地址
	WxOpenId  string `form:"wxOpenId" json:"wxOpenId"`   // 微信openId
}

type UserQuery struct {
	UserName  string `json:"userName"`
	Role      int    `json:"role"`
	PageIndex int    `json:"pageIndex"`
	PageSize  int    `json:"pageSize"`
}

type UserPageRequest struct {
	UserName  string `json:"userName"`
	Role      int    `json:"role"`
	PageIndex int    `json:"pageIndex"`
	PageSize  int    `json:"pageSize"`
}

const (
	USER_STATUS_ENABLE  = 1
	USER_STATUS_DISABLE = 2
)
