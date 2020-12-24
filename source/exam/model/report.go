package model

import (
	"github.com/jinzhu/gorm"
)

type ReportHistory struct {
	gorm.Model
	Name      string
	StartTime string
	EndTime   string
}

type SubjectReport struct {
	gorm.Model
	StudentId       uint
	StudentName     string `gorm:"-"`
	StudentEngName  string `gorm:"-"`
	StudentClass    string `gorm:"-"`
	HistoryId       uint
	HistoryName     string `gorm:"-"`
	Subject         string
	Homework        int
	IsPraise        int
	PraiseReason    string `gorm:"type:TEXT"`
	CriticizeNum    int
	CriticizeReason string `gorm:"type:TEXT"`
}

type SubjectReportQuery struct {
	ID             uint
	StudentId      uint
	StudentName    string
	StudentEngName string
	StudentClass   string
	HistoryId      uint
	PageIndex      int `json:"pageIndex"`
	PageSize       int `json:"pageSize"`
}

type HometeacherReport struct {
	gorm.Model
	StudentId             uint
	StudentName           string `gorm:"-"`
	StudentEngName        string `gorm:"-"`
	StudentClass          string `gorm:"-"`
	HistoryId             uint
	HistoryName           string `gorm:"-"`
	Appearance            int
	Clean                 int
	InsultToTeacher       int
	InsultToTeacherDetail string `gorm:"type:TEXT"`
	InsultToMate          int
	InsultToMateDetail    string `gorm:"type:TEXT"`
	Late                  int
	Absent                int
	Leave                 int
	BadInDorm             int
	IsPraise              int
	PraiseReason          string `gorm:"type:TEXT"`
	CriticizeNum          int
	CriticizeReason       string `gorm:"type:TEXT"`
	Comment               string `gorm:"type:TEXT"`
	ActMark               int
}

type HometeacherReportQuery struct {
	ID             uint
	StudentId      uint
	StudentName    string
	StudentEngName string
	StudentClass   string
	HistoryId      uint
	PageIndex      int `json:"pageIndex"`
	PageSize       int `json:"pageSize"`
}

type ReportExport struct {
	StudentId             uint
	StudentName           string
	StudentEngName        string
	FinalMark             int
	BaseMark              int
	AddMark               int
	PraiseMark            int
	PraiseDetail          string
	CriticizeMark         int
	CriticizeDetail       string
	Appearance            int
	Clean                 int
	InsultToTeacher       int
	InsultToTeacherDetail string
	InsultToMate          int
	InsultToMateDetail    string
	Late                  int
	Absent                int
	BadInDorm             int
	Leave                 int
	ActMark               int
}
