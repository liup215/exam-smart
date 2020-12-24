package admin

import (
	"exam/lib/net/http"
	"exam/model"

	"exam/controller/base"

	"github.com/gin-gonic/gin"
)

func ChapterList(c *gin.Context) {
	type Query struct {
		SubjectId int `json:"subjectId"`
	}

	query := model.ChapterQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	list, _ := base.Svr.ChapterList(query)
	http.Response(c, 200, "获取成功!", list)
}

func ChapterAdd(c *gin.Context) {
	chapter := model.Chapter{}

	if err := c.BindJSON(&chapter); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	err := base.Svr.ChapterAdd(chapter)

	if err != nil {
		http.Response(c, 400, err.Error(), nil)
		return
	} else {
		http.Response(c, 200, "添加成功", nil)
	}
}

func ChapterTree(c *gin.Context) {
	query := model.ChapterQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, err.Error(), nil)
		return
	}

	tree := base.Svr.ChapterTree(query.BookId)

	http.Response(c, 200, "获取成功！", gin.H{
		"list": tree,
	})
}

func ChapterUpdate(c *gin.Context) {
	chapter := model.Chapter{}

	if err := c.BindJSON(&chapter); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	err := base.Svr.ChapterUpdate(chapter)

	if err != nil {
		http.Response(c, 400, err.Error(), nil)
		return
	} else {
		http.Response(c, 200, "添加成功", nil)
	}
}

func ChapterDelete(c *gin.Context) {
	query := model.ChapterQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	err := base.Svr.ChapterDelete(query.Id)
	if err != nil {
		http.Response(c, 200, "删除失败: "+err.Error(), nil)
		return
	} else {
		http.Response(c, 200, "删除成功", nil)
	}
}
