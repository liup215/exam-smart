package admin

import (
	"exam/controller/base"

	"github.com/gin-gonic/gin"

	"exam/lib/net/http"
	"exam/model"
)

func QuestionList(c *gin.Context) {
	query := model.QuestionQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	list, total := base.Svr.SelectQuestionList(query)

	http.Response(c, 200, "数据获取成功!", gin.H{
		"list":    list,
		"total":   total,
		"pageNum": query.PageIndex,
	})

}

func QuestionAdd(c *gin.Context) {
	q := model.Question{}

	if err := c.BindJSON(&q); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	err := base.Svr.QuestionAdd(q)

	message := "添加成功"
	if err != nil {
		message = "添加失败, " + err.Error()
	}
	http.Response(c, 200, message, nil)
}
