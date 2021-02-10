package model

type Teacher struct {
	Model
	UserName    string `json:"userName"`
	Password    string `json:"-"`
	SubjectId   uint   `json:"subjectId"`
	SubjectName string `gorm:"-" subjectId:""`
	Salt        string `json:"-"`
	Status      int
}

const (
	TEACHER_STATUS_ENABLE  = 1
	TEACHER_STATUS_DISABLE = 2
)
