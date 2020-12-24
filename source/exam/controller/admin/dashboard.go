package admin

import (
	"exam/controller/base"
	"exam/lib/net/http"
	"exam/lib/utils"
	"time"

	"github.com/gin-gonic/gin"
)

func Dashboard(c *gin.Context) {

	monthDayDoExamQuestionValue := []int{}
	monthDayText := utils.GetMonthDay(time.Now())

	http.Response(c, 200, "数据获取成功", gin.H{
		"examPaperCount":              base.Svr.SelectExamPaperAllCount(),
		"questionCount":               base.Svr.SelectQuestionAllCount(),
		"doExamPaperCount":            base.Svr.SelectExamPaperAnswerAllCount(),
		"doQuestionCount":             base.Svr.SelectExamPaperQuestionCustomerAnswerAllCount(),
		"monthDayUserActionValue":     base.Svr.SelectUserEventLogMothCount(),
		"monthDayDoExamQuestionValue": monthDayDoExamQuestionValue,
		"monthDayText":                monthDayText,
	})
}
