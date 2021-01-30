package admin

import (
	"exam/lib/net/http"
	"exam/lib/utils"
	"time"

	"github.com/gin-gonic/gin"
)

func (h *Handler) Dashboard(c *gin.Context) {

	monthDayDoExamQuestionValue := []int{}
	monthDayText := utils.GetMonthDay(time.Now())

	http.Response(c, 200, "数据获取成功", gin.H{
		"examPaperCount":              h.svr.SelectExamPaperAllCount(),
		"questionCount":               h.svr.SelectQuestionAllCount(),
		"doExamPaperCount":            0,
		"doQuestionCount":             0,
		"monthDayUserActionValue":     0,
		"monthDayDoExamQuestionValue": monthDayDoExamQuestionValue,
		"monthDayText":                monthDayText,
	})
}
