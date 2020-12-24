package admin

import (
	"github.com/gin-gonic/gin"
)

func (h *Handler) HomePage(c *gin.Context) {
	c.HTML(200, "admin/index.html", gin.H{})
}

func (h *Handler) WelcomePage(c *gin.Context) {
	c.HTML(200, "admin/welcome.html", gin.H{})
}
