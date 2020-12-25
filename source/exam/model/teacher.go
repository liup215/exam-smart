package model

import (
	"github.com/jinzhu/gorm"
)

type Teacher struct {
	gorm.Model
	UserName  string `form:"userName" json:"userName"` // 用户名
	Password  string `form:"password" json:"password"`
	RealName  string `form:"realName" json:"realName"` // 真实姓名
	Age       int    `form:"age" json:"age"`
	Sex       int    `form:"sex" json:"sex"` // 1.男 2女
	BirthDay  string `form:"birthDay" json:"birthDay"`
	UserLevel int    `form:"userLevel" json:"userLevel"` // 学生年级(1-12)
	Phone     string `form:"phone" json:"phone"`
	Status    int    `form:"status" json:"status"`       // 1.启用 2禁用
	ImagePath string `form:"imagePath" json:"imagePath"` // 头像地址
	WxOpenId  string `form:"wxOpenId" json:"wxOpenId"`   // 微信openId
}

type TeacherQuery struct {
	UserName  string `json:"userName"`
	PageIndex int    `json:"pageIndex"`
	PageSize  int    `json:"pageSize"`
}
