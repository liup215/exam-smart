package service

import (
	"exam/lib/utils"
)

func (log *Service) SelectUserEventLogMothCount() []int {
	monthCount := log.dao.SelectUserEventLogCountByDate(utils.GetMonthStartDay(), utils.GetMonthEndDay())

	days := utils.MothStartToNowFormat()

	list := []int{}

	for _, day := range days {
		for _, keyvalue := range monthCount {
			if day == keyvalue.Name {
				list = append(list, keyvalue.Value)
			} else {
				list = append(list, 0)
			}
		}
	}

	return list

}
