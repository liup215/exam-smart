package teacher

import (
	"exam/conf"
	"exam/lib/net/http/middleware/auth"
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
	authMiddleware := auth.New(conf.Conf.Auth)
	authMiddleware.PayloadFunc = auth.PayloadFunc
	authMiddleware.IdentityHandler = auth.IdentityHandler
	authMiddleware.Authenticator = h.Authenticator
	authMiddleware.Unauthorized = h.Unauthorized

	r.POST("/login", authMiddleware.LoginHandler)
	r.Use(authMiddleware.MiddlewareFunc())

	r.POST("/dashboard", h.Dashboard)
	r.GET("/info", h.GetUserInfo)

	r.POST("/student/list", h.StudentList)

	r.POST("/report/rsubject/list", h.ReportSubjectList)
	r.POST("/report/history/list", h.ReportHistoryList)
	r.POST("/report/history/add", h.ReportHistoryAdd)
	r.POST("/report/subject/edit", h.SubjectReportEdit)
	r.POST("/report/subject/list", h.SubjectReportList)
	r.POST("/report/hometeacher/edit", h.HometeacherReportEdit)
	r.POST("/report/hometeacher/list", h.HometeacherReportList)

}
