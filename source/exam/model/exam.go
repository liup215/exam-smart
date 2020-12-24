package model

import (
	"exam/lib/database/data"
)

type ExamPaperQuestionCustomerAnswer struct {
	Id                   int           `form:"id" json:"id" gorm:"primary_key;AUTO_INCREMENT"`
	QuestionId           int           `form:"question_id" json:"question_id"`     // 题目Id
	ExamPaperId          int           `form:"exam_paper_id" json:"exam_paper_id"` // 答案Id
	ExamPaperAnswerId    int           `form:"exam_paper_answer_id" json:"exam_paper_answer_id"`
	QuestionType         int           `form:"question_type" json:"question_type"`                       // 题型
	Subjecid             int           `form:"subject_id" json:"subject_id"`                             // 学科
	CustomerScore        int           `form:"customer_score" json:"customer_score"`                     // 得分
	QuestionScore        int           `form:"question_score" json:"question_score"`                     // 题目原始分数
	QuestionTexcontentId int           `form:"question_text_content_id" json:"question_text_content_id"` // 问题内容
	Answer               string        `form:"answer" json:"answer"`                                     // 做题答案
	TexcontentId         int           `form:"text_content_id" json:"text_content_id"`                   // 做题内容
	DoRight              int           `form:"do_right" json:"do_right"`                                 // 是否正确
	CreateUser           int           `form:"create_user" json:"create_user"`                           // 做题人
	CreateTime           data.DateTime `form:"create_time" json:"create_time"`
	ItemOrder            int           `form:"item_order" json:"item_order"`
}

type ExamPaperAnswer struct {
	Id              int           `form:"id" json:"id" gorm:"primary_key;AUTO_INCREMENT"`
	ExamPaperId     int           `form:"exam_paper_id" json:"exam_paper_id"`
	PaperName       string        `form:"paper_name" json:"paper_name"`             // 试卷名称
	PaperType       int           `form:"paper_type" json:"paper_type"`             // 试卷类型( 1固定试卷  2临时试卷 3班级试卷 4.时段试卷 )
	Subjecid        int           `form:"subject_id" json:"subject_id"`             // 学科
	SystemScore     int           `form:"system_score" json:"system_score"`         // 系统判定得分
	UserScore       int           `form:"user_score" json:"user_score"`             // 最终得分(千分制)
	PaperScore      int           `form:"paper_score" json:"paper_score"`           // 试卷总分
	QuestionCorrect int           `form:"question_correct" json:"question_correct"` // 做对题目数量
	QuestionCount   int           `form:"question_count" json:"question_count"`     // 题目总数量
	DoTime          int           `form:"do_time" json:"do_time"`                   // 做题时间(秒)
	Status          int           `form:"status" json:"status"`                     // 试卷状态(1待判分 2完成)
	CreateUser      int           `form:"create_user" json:"create_user"`           // 学生
	CreateTime      data.DateTime `form:"create_time" json:"create_time"`           // 提交时间
	TaskExamId      int           `form:"task_exam_id" json:"task_exam_id"`
}
