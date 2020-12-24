package router

import (
	"exam/controller/admin"

	"github.com/gin-gonic/gin"
)

func adminRouter(r *gin.RouterGroup) {
	r.POST("/dashboard", admin.Dashboard)

	r.POST("/user/page/list", admin.UserPageList)

	r.POST("/education/subject/list", admin.SubjectList)
	r.POST("/education/subject/all", admin.SubjectAll)
	r.POST("/education/book/list", admin.BookList)
	r.POST("/education/book/add", admin.BookAdd)
	r.POST("/education/book/getById", admin.BookById)
	r.POST("/education/book/update", admin.BookUpdate)

	r.POST("/education/chapter/list", admin.ChapterList)
	r.POST("/education/chapter/tree", admin.ChapterTree)
	r.POST("/education/chapter/add", admin.ChapterAdd)
	r.POST("/education/chapter/update", admin.ChapterUpdate)
	r.POST("/education/chapter/delete", admin.ChapterDelete)

	r.POST("/exam/paper/list", admin.ExamPaperList)

	r.POST("/question/list", admin.QuestionList)
	r.POST("/question/add", admin.QuestionAdd)

}
