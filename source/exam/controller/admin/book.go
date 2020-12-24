package admin

import (
	"exam/controller/base"
	"exam/lib/net/http"
	"exam/model"

	"github.com/gin-gonic/gin"
)

func BookList(c *gin.Context) {

	query := model.BookQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	list, _ := base.Svr.BookList(query)
	http.Response(c, 200, "获取成功!", gin.H{
		"list": list,
	})
}

func BookById(c *gin.Context) {
	query := model.BookQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	if query.Id == 0 {
		http.Response(c, 400, "书籍ID不能为空", nil)
		return
	}

	book, err := base.Svr.SelectBookById(query.Id)
	if err != nil {
		http.Response(c, 400, "查询失败： "+err.Error(), nil)
		return
	}
	http.Response(c, 200, "获取成功!", book)
}

func BookAdd(c *gin.Context) {
	book := model.Book{}

	if err := c.BindJSON(&book); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	err := base.Svr.BookAdd(book)

	if err != nil {
		http.Response(c, 400, err.Error(), nil)
		return
	}

	http.Response(c, 200, "添加成功", nil)

}

func BookUpdate(c *gin.Context) {
	book := model.Book{}

	if err := c.BindJSON(&book); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	err := base.Svr.BookUpdate(book)

	if err != nil {
		http.Response(c, 400, err.Error(), nil)
		return
	}

	http.Response(c, 200, "更新成功", nil)
}
