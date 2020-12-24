package admin

import (
	"exam/lib/net/http"
	"exam/model"

	"github.com/gin-gonic/gin"
)

func (h *Handler) UserPageList(c *gin.Context) {

	var request model.UserQuery

	if err := c.BindJSON(&request); err != nil {
		http.Response(c, 400, "参数错误", gin.H{})
		return
	}

	list, total := h.svr.UserPage(request)

	http.Response(c, 200, "获取成功", gin.H{
		"total":   total,
		"list":    list,
		"pageNum": request.PageIndex,
	})

}
