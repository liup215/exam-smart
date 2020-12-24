package util

import (
	"exam/conf"
	"exam/service"

	"github.com/gin-gonic/gin"
)

func NewHandler(c *conf.Config) *Handler {
	return &Handler{
		svr: service.New(c),
	}
}

func NewHandlerFromService(svr *service.Service) *Handler {
	return &Handler{
		svr: svr,
	}
}

type Handler struct {
	svr *service.Service
}

func (h *Handler) Route(r *gin.RouterGroup) {
	r.POST("/upload", h.UploadImage)

	r.GET("/qiniu/upload_token", h.UploadToken)
}
