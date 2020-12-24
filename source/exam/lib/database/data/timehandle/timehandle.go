package timehandle

/*
	author guoshuang
*/

import (
	"fmt"
	"time"
)

const (
	DateFormat        string = "2006-01-02"
	DatetimeFormat    string = "2006-01-02 15:04:05"
	DatetimeNumFormat string = "20060102150405"
)

// timestamp -> string
func TimestampToString(timestamp int64) string {
	return time.Unix(timestamp, 0).Format("2006-01-02 15:04:05")
}

// timestamp -> time.Time
func TimestampToTime(t int64) time.Time {
	return time.Unix(t, 0)
}

// time.Time -> string
func TimeToString(t time.Time) string {
	return t.Format("2006-01-02 15:04:06")
}

func TimeToStringFormat(t time.Time, f string) string {
	return t.Format(f)
}

func TimeToStringYYYYmmDD(t time.Time) string {
	return t.Format("20060102")
}

func DayBetweenTime(t time.Time) (start, end time.Time) {
	date := t.Format("2006-01-02")
	return StringToTime(date + " 00:00:00"), StringToTime(date + " 23:59:59")
}

// time.time -> timestamp
func TimeToTimestamp(t time.Time) int64 {
	return t.Unix()
}

// string -> timestamp
func StringToTimestamp(timestr string) int64 {
	t, err := time.Parse("2006-01-02 15:04:05", timestr)
	tu := t.Unix()
	if err != nil {
		fmt.Println("String -> Timestamp错误", err.Error())
	}
	return tu
}

// string -> time.Time
func StringToTime(timestr string) time.Time {

	local, _ := time.LoadLocation("Local")
	if len(timestr) <= 11 {
		t, err := time.ParseInLocation("2006-01-02", timestr, local)
		if err != nil {
			fmt.Println("String -> time.Time错误", err.Error())
		}
		return t
	}

	t, err := time.ParseInLocation("2006-01-02 15:04:05", timestr, local)

	if err != nil {
		fmt.Println("String -> time.Time错误", err.Error())
	}
	return t
}

func GetFirstDateOfMonth(d time.Time) time.Time {
	d = d.AddDate(0, 0, -d.Day()+1)
	return GetZeroTime(d)
}

//获取传入的时间所在月份的最后一天，即某月最后一天的0点。如传入time.Now(), 返回当前月份的最后一天0点时间。
func GetLastDateOfMonth(d time.Time) time.Time {
	return GetFirstDateOfMonth(d).AddDate(0, 1, -1)
}

//获取某一天的0点时间
func GetZeroTime(d time.Time) time.Time {
	return time.Date(d.Year(), d.Month(), d.Day(), 0, 0, 0, 0, d.Location())
}

func Test() {
	fmt.Println("timestamp -> time.time", TimestampToTime(1541073911))
	fmt.Println("timestamp -> string", TimestampToString(1541073911))
	fmt.Println("string -> timestamp", StringToTimestamp("2018-11-01 12:05:11"))
	fmt.Println("string -> time.time", StringToTime("2018-11-01 12:05:11"))
	fmt.Println("time.time -> string", TimeToString(time.Now()))
	fmt.Println("time.time -> stamp", TimeToTimestamp(time.Now()))
}
