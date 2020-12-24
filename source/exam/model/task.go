package model

import (
	"exam/lib/database/data"
)

type TaskExam struct {
	Id                int           `form:"id" json:"id" gorm:"primary_key;AUTO_INCREMENT"`
	Title             string        `form:"title" json:"title"`
	GradeLevel        int           `gor:"grade_level" json:"grade_level"`                      // 级别
	FrameTexcontentId int           `form:"frame_text_content_id" json:"frame_text_content_id"` // 任务框架 内容为JSON
	CreateUser        int           `form:"create_user" json:"create_user"`
	CreateTime        data.DateTime `form:"create_time" json:"create_time"`
	Deleted           int           `form:"deleted" json:"deleted"`
	CreateUserName    string        `form:"create_user_name" json:"create_user_name"`
}

func (*TaskExam) TableName() string {
	return "task_exam"
}

type TaskExamCustomerAnswer struct {
	Id           int           `form:"id" json:"id" gorm:"primary_key;AUTO_INCREMENT"`
	TaskExamId   int           `form:"task_exam_id" json:"task_exam_id"`
	CreateUser   int           `form:"create_user" json:"create_user"`
	CreateTime   data.DateTime `form:"create_time" json:"create_time"`
	TexcontentId int           `form:"text_content_id" json:"text_content_id"` // 任务完成情况(Json)
}

func (*TaskExamCustomerAnswer) TableName() string {
	return "task_exam_customer_answer"
}
