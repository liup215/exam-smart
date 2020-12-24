package admin

import (
	"exam/controller/base"
	"exam/lib/net/http"
	"exam/model"

	"github.com/gin-gonic/gin"
)

func SubjectList(c *gin.Context) {

	query := model.SubjectQuery{}
	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}
	list, total := base.Svr.SelectSubjectList(query)

	http.Response(c, 200, "数据获取成功", gin.H{
		"list":    list,
		"total":   total,
		"pageNum": query.PageIndex,
	})
}

func SubjectAll(c *gin.Context) {
	list, total := base.Svr.AllSubject()

	http.Response(c, 200, "数据获取成功", gin.H{
		"list":  list,
		"total": total,
	})
}
