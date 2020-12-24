package dao

import (
	"exam/model"
	"fmt"
	"time"
)

func (dao *Dao) SelectUserEventLogCountByDate(startTime, endTime time.Time) []model.Keyvalue {
	var result []model.Keyvalue
	dao.orm.Raw(`SELECT create_time as name,COUNT(create_time) as value from (SELECT DATE_FORMAT(create_time,'%Y-%m-%d') as create_time from t_user_event_log WHERE  create_time  between ? and ? ) a GROUP BY create_time`, startTime, endTime).Scan(&result)
	fmt.Println(result)

	return result
}
