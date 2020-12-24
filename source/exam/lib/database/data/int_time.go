package data

import (
	"database/sql/driver"
	"errors"
	"strconv"
	xtime "time"

	"gopkg.in/mgo.v2/bson"
)

// Time be used to MySql timestamp converting.
type IntTime int64

// Scan scan time.
func (jt *IntTime) Scan(src interface{}) (err error) {
	switch sc := src.(type) {
	case xtime.Time:
		*jt = IntTime(sc.Unix())
	case string:
		var i int64
		i, err = strconv.ParseInt(sc, 10, 64)
		*jt = IntTime(i)
	case int64:
		*jt = IntTime(sc)
	case []byte:
		var i int64
		i, err = strconv.ParseInt(string(sc), 10, 64)
		*jt = IntTime(i)
	}
	return
}

// Value get time value.
func (jt *IntTime) Value() (driver.Value, error) {
	if jt == nil {
		return nil, nil
	}
	return xtime.Unix(int64(*jt), 0), nil
}

func (jt IntTime) GetBSON() (interface{}, error) {
	if jt == 0 {
		return nil, nil
	}
	return jt.Time(), nil
}

func (t *IntTime) SetBSON(raw bson.Raw) error {
	var decode xtime.Time
	err := raw.Unmarshal(&decode)
	if err != nil {
		return err
	}

	*t = IntTime(decode.Unix())
	return nil
}

// Time get time.
func (jt IntTime) Time() xtime.Time {
	return xtime.Unix(int64(jt), 0)
}

func (jt *IntTime) UnmarshalJSON(data []byte) (err error) {
	now, err := xtime.ParseInLocation(`"`+timeFormart+`"`, string(data), xtime.Local)
	if err != nil {
		jt = nil
		return nil
	}
	*jt = IntTime(now.Unix())
	//t=nil
	return
}

func (jt IntTime) MarshalJSON() ([]byte, error) {
	if y := jt.Time().Year(); y < 0 || y >= 10000 {
		return nil, errors.New("Time.MarshalJSON: year outside of range [0,9999]")
	}

	b := make([]byte, 0, len(timeFormart)+2)
	b = append(b, '"')
	if !jt.Time().IsZero() {
		b = jt.Time().AppendFormat(b, timeFormart)
	}

	b = append(b, '"')
	return b, nil
}

func Now() IntTime {
	now := xtime.Now()
	return IntTime(now.Unix())
}
