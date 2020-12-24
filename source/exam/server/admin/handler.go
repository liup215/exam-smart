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

	r.POST("/education/subject/add", h.SubjectAdd)
	r.POST("/education/subject/edit", h.SubjectEdit)
	r.POST("/education/subject/list", h.SubjectListOld)
	r.POST("/education/subject/select/:id", h.SubjectSelectById)
	r.POST("/education/subject/all", h.SubjectAll)

	r.POST("/education/syllabus/list", h.SyllabusList)
	r.POST("/education/syllabus/add", h.SyllabusAdd)
	r.POST("/education/syllabus/getById", h.SyllabusById)
	r.POST("/education/syllabus/update", h.SyllabusUpdate)

	r.POST("/education/chapter/list", h.ChapterList)
	r.POST("/education/chapter/tree", h.ChapterTree)
	r.POST("/education/chapter/add", h.ChapterAdd)
	r.POST("/education/chapter/update", h.ChapterUpdate)
	r.POST("/education/chapter/delete", h.ChapterDelete)

	r.GET("/subject/list", h.SubjectListPage)
	r.POST("/subject/list", h.SubjectList)
	r.GET("/subject/add", h.SubjectAddPage)
	r.POST("/subject/add", h.SubjectAdd)
	r.POST("/subject/edit", h.SubjectEdit)

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

	r.POST("/exam/pastPaper/list", h.PastPaperList)
	r.POST("/exam/pastPaper/selectById", h.PastPaperById)
	r.POST("/exam/pastPaper/edit", h.PastPaperEdit)
}
