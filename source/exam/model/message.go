package model

import (
	"exam/lib/database/data"
)

type Message struct {
	Id               int    `form:"id" json:"id" gorm:"primary_key;AUTO_INCREMENT"`
	Title            string `form:"title" json:"title"`     // 标题
	Content          string `form:"content" json:"content"` // 内容
	CreateTime       string `form:"create_time" json:"create_time"`
	SendUserId       int    `form:"send_user_id" json:"send_user_id"`             // 发送者用户ID
	SendUserName     string `form:"send_user_name" json:"send_user_name"`         // 发送者用户名
	SendRealName     string `form:"send_real_name" json:"send_real_name"`         // 发送者真实姓名
	ReceiveUserCount int    `form:"receive_user_count" json:"receive_user_count"` // 接收人数
	ReadCount        int    `form:"read_count" json:"read_count"`                 // 已读人数
}

type MessageUser struct {
	Id              int           `form:"id" json:"id" gorm:"primary_key;AUTO_INCREMENT"`
	MessageId       int           `form:"message_id" json:"message_id"`               // 消息内容ID
	ReceiveUserId   int           `form:"receive_user_id" json:"receive_user_id"`     // 接收人ID
	ReceiveUserName string        `form:"receive_user_name" json:"receive_user_name"` // 接收人用户名
	ReceiveRealName string        `form:"receive_real_name" json:"receive_real_name"` // 接收人真实姓名
	Readed          int           `form:"readed" json:"readed"`                       // 是否已读
	CreateTime      data.DateTime `form:"create_time" json:"create_time"`
	ReadTime        data.DateTime `form:"read_time" json:"read_time"` // 阅读时间
}
