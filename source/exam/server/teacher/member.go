package teacher

import (
	"github.com/gin-gonic/gin"
)

func (h *Handler) MemberListPage(c *gin.Context) {
	c.HTML(200, "admin/member_list.html", gin.H{})
}
