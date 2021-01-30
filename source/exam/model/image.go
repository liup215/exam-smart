package model

import ()

type Image struct {
	Model
	Name string `gorm:"unique;type:varchar(64)" json:"name"`
}
