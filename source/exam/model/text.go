package model

import ()

type TextContent struct {
	Model
	Content string `gorm:"type:TEXT" json:"content"`
}
