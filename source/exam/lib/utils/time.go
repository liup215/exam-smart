package utils

import (
	"time"
)

func GetMonthDay(t time.Time) []int {
	firstDay := t.AddDate(0, 0, -t.Day()+1)
	lastDay := firstDay.AddDate(0, 1, -1)

	monthDay := []int{}

	for i := firstDay.Day(); i <= lastDay.Day(); i++ {
		monthDay = append(monthDay, i)
	}

	return monthDay
}

func GetMonthStartDay() time.Time {
	t := time.Now()
	return t.AddDate(0, 0, -t.Day()+1)
}

func GetMonthEndDay() time.Time {
	t := time.Now()
	firstDay := t.AddDate(0, 0, -t.Day()+1)
	return firstDay.AddDate(0, 1, -1)
}

func MothStartToNowFormat() []string {
	days := []string{}
	t := time.Now()
	firstDay := t.AddDate(0, 0, -t.Day()+1)
	lastDay := firstDay.AddDate(0, 1, 0)

	for firstDay.Before(lastDay) {
		days = append(days, firstDay.Format("2006-01-02"))

		firstDay = firstDay.AddDate(0, 0, 1)

	}

	return days

}
