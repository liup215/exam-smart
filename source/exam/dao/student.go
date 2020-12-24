package dao

import (
	"errors"
	"exam/model"
	"fmt"

	"github.com/jinzhu/gorm"
	"github.com/tealeg/xlsx"
)

func (d *Dao) InitStudents() {
	// 添加学生
	sts, _ := xlsx.OpenFile("学生名单.xlsx")
	sht1 := sts.Sheets[0]

	rows := sht1.Rows[1:]

	for _, row := range rows {
		stud := model.Student{}
		uid, err := row.Cells[0].Int()
		if err != nil {
			fmt.Println("-------------------", row.Cells[0].String())
			continue
		}
		stud.ID = uint(uid)
		stud.Name = row.Cells[1].String()
		stud.EngName = row.Cells[2].String()
		stud.Class = row.Cells[3].String()
		if totalMark, err := row.Cells[5].Int(); err != nil {
			stud.TotalMark = 100
		} else {
			stud.TotalMark = totalMark
		}

		d.orm.Model(&model.Student{}).Updates(&stud)
	}
}

func (d *Dao) StudentById(id uint) (model.Student, error) {
	s := model.Student{}
	err := d.orm.Where("id = ?", id).First(&s).Error
	return s, err
}

func (d *Dao) StudentList(q model.StudentQuery) ([]model.Student, int) {
	list := []model.Student{}
	total := 0

	db := d.parseStudentQuery(q)

	db.Find(&list).Count(&total)

	return list, total
}

func (d *Dao) parseStudentQuery(q model.StudentQuery) *gorm.DB {
	db := d.orm.Model(&model.Student{})

	if q.ID != 0 {
		db = db.Where("id = ?", q.ID)
	}

	if q.Name != "" {
		db = db.Where("name = ?", q.Name)
	}

	if q.EngName != "" {
		db = db.Where("eng_name = ?", q.EngName)
	}

	if q.Class != "" {
		db = db.Where("class = ?", q.Class)
	}

	return db
}

func (d *Dao) StudentUpdate(stu model.Student) error {
	if stu.ID == 0 {
		return errors.New("查无此数据")
	}

	return d.orm.Model(&model.Student{}).Save(&stu).Error
}
