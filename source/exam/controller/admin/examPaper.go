package admin

import (
	"exam/controller/base"
	"exam/lib/net/http"
	"exam/model"

	"github.com/gin-gonic/gin"
)

func ExamPaperList(c *gin.Context) {
	query := model.ExamPaperQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	list, total := base.Svr.SelectExamPaperList(query)

	http.Response(c, 200, "数据获取成功!", gin.H{
		"list":    list,
		"total":   total,
		"pageNum": query.PageIndex,
	})

}
