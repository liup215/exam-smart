package admin

import (
	"exam/dao"
	"exam/lib/net/http"
	"exam/model"

	"github.com/gin-gonic/gin"
)

func (h *Handler) SyllabusList(c *gin.Context) {

	query := dao.SyllabusQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	list, total := h.svr.SyllabusList(query)
	http.Response(c, 200, "获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}

func (h *Handler) SelectSyllabusAll(c *gin.Context) {
	list, total := h.svr.SelectSyllabusAll(dao.SyllabusQuery{})
	http.Response(c, 200, "获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}

func (h *Handler) SyllabusListOld(c *gin.Context) {

	query := dao.SyllabusQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	list, _ := h.svr.SyllabusList(query)
	http.Response(c, 200, "获取成功!", gin.H{
		"list": list,
	})
}

func (h *Handler) SelectSyllabusById(c *gin.Context) {
	query := dao.SyllabusQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	if query.ID == 0 {
		http.Response(c, 400, "书籍ID不能为空", nil)
		return
	}

	syllabus, err := h.svr.SelectSyllabusById(query.ID)
	if err != nil {
		http.Response(c, 400, "查询失败： "+err.Error(), nil)
		return
	}
	http.Response(c, 200, "获取成功!", syllabus)
}

func (h *Handler) SyllabusAdd(c *gin.Context) {
	syllabus := model.Syllabus{}

	if err := c.BindJSON(&syllabus); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	err := h.svr.SyllabusAdd(syllabus)

	if err != nil {
		http.Response(c, 400, err.Error(), nil)
		return
	}

	http.Response(c, 200, "添加成功", nil)

}

func (h *Handler) SyllabusUpdate(c *gin.Context) {
	syllabus := model.Syllabus{}

	if err := c.BindJSON(&syllabus); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	err := h.svr.SyllabusUpdate(syllabus)

	if err != nil {
		http.Response(c, 400, err.Error(), nil)
		return
	}

	http.Response(c, 200, "更新成功", nil)
}
