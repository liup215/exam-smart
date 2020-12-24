package controller

import (
	"exam/lib/net/http"
	"github.com/gin-gonic/gin"
)

func BashController(c *gin.Context) {
	http.Response(c, 200, "获取成功", gin.H{})
}
