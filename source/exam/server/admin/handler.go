package admin

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

	r.POST("/vue-login", authMiddleware.LoginHandler)
	r.Use(authMiddleware.MiddlewareFunc())

	r.POST("/dashboard", h.Dashboard)
	r.GET("/info", h.GetUserInfo)

	r.POST("/subject/list", h.SubjectList)
	r.POST("/subject/add", h.SubjectAdd)
	r.POST("/subject/edit", h.SubjectEdit)
	r.POST("/subject/select/:id", h.SubjectSelectById)
	r.POST("/subject/all", h.SubjectAll)

	r.POST("/syllabus/list", h.SyllabusList)
	r.POST("/syllabus/add", h.SyllabusAdd)
	r.POST("/syllabus/edit", h.SyllabusUpdate)

	r.POST("/chapter/tree", h.ChapterTree)
	r.POST("/chapter/listBySyllabus", h.ChapterListBySyllabus)
	r.POST("/chapter/add", h.ChapterAdd)
	r.POST("/chapter/edit", h.ChapterUpdate)
	r.POST("/chapter/update", h.ChapterUpdate)
	r.POST("/chapter/delete", h.ChapterDelete)

	r.POST("/question/list", h.QuestionList)
	r.POST("/question/edit", h.QuestionAddOrEdit)
	r.POST("/question/selectById", h.QuestionById)

	r.POST("/questionToChapter/add", h.QuestionToChapterAdd)
	r.POST("/questionToChapter/delete", h.QuestionToChapterDelete)

	r.POST("/exam/paper/edit", h.ExamPaperEdit)
	r.POST("/exam/paper/list", h.ExamPaperList)
	r.POST("/exam/paper/selectById", h.ExamPaperById)
	r.GET("/exam/paper/download", h.ExamPaperDownload)

	r.POST("/exam/pastPaper/list", h.PastPaperList)
	r.POST("/exam/pastPaper/selectById", h.PastPaperById)
	r.POST("/exam/pastPaper/edit", h.PastPaperEdit)

	r.POST("/year/add", h.YearAdd)
	r.POST("/year/edit", h.YearEdit)
	r.POST("/year/getById", h.SelectYearById)
	r.POST("/year/list", h.SelectYearList)
	r.POST("/year/all", h.SelectYearAll)

	r.POST("/series/add", h.SeriesAdd)
	r.POST("/series/edit", h.SeriesEdit)
	r.POST("/series/getById", h.SelectSeriesById)
	r.POST("/series/list", h.SelectSeriesList)

	r.POST("/code/add", h.CodeAdd)
	r.POST("/code/edit", h.CodeEdit)
	r.POST("/code/getById", h.SelectCodeById)
	r.POST("/code/list", h.SelectCodeList)
}
