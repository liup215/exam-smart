package data

import (
	"database/sql/driver"
	"errors"
	"exam/lib/database/data/timehandle"
	"time"

	"gopkg.in/mgo.v2/bson"
)

type Time time.Time

const (
	timeFormart = "2006-01-02 15:04:05"
)

func (t *Time) UnmarshalJSON(data []byte) (err error) {
	now, err := time.ParseInLocation(`"`+timeFormart+`"`, string(data), time.Local)
	if err != nil {
		t = nil
		return nil
	}
	*t = Time(now)
	//t=nil
	return
}

func (t Time) MarshalJSON() ([]byte, error) {
	if y := t.GetTime().Year(); y < 0 || y >= 10000 {
		return nil, errors.New("Time.MarshalJSON: year outside of range [0,9999]")
	}

	b := make([]byte, 0, len(timeFormart)+2)
	b = append(b, '"')
	if !time.Time(t).IsZero() {
		b = time.Time(t).AppendFormat(b, timeFormart)
	}

	b = append(b, '"')
	return b, nil
}

func (t Time) String() string {
	return time.Time(t).Format(timeFormart)
}

/*
func (t Time) GetBSON() (interface{}, error) {
	return time.Time(t), nil
}
*/
func (t *Time) GetBSON() (interface{}, error) {
	if t == nil {
		return nil, nil
	}
	return time.Time(*t), nil
}

func (t *Time) SetBSON(raw bson.Raw) error {
	var decode time.Time
	err := raw.Unmarshal(&decode)
	if err != nil {
		return err
	}

	*t = Time(decode)
	return nil
}

func (t *Time) GetTime() time.Time {
	return time.Time(*t)
}
func (t *Time) GetString() string {
	return timehandle.TimeToString(time.Time(*t))
}

func TimeNow() (t *Time) {
	i := Time(time.Now())
	t = &i
	return t
}

func (t *Time) Value() (driver.Value, error) {
	if t == nil {
		return nil, nil
	}
	return t.GetTime(), nil
}

func TimeTo(tt time.Time) (t *Time) {
	i := Time(tt)
	t = &i
	return t
}
