package teacher

import (
	"exam/lib/net/http"
	"github.com/gin-gonic/gin"
)

func (h *Handler) HomePage(c *gin.Context) {
	http.Response(c, 200, "欢迎来到Exam-Smart!", gin.H{})
}
