package teacher

import (
	"exam/lib/net/http"
	"exam/model"

	"github.com/gin-gonic/gin"
)

func (h *Handler) StudentList(c *gin.Context) {

	query := model.StudentQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	list, total := h.svr.StudentList(query)
	http.Response(c, 200, "获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}
