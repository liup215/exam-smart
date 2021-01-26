package admin

import (
	"exam/lib/net/http"
	"exam/model"
	"strconv"

	"github.com/gin-gonic/gin"
)

func (h *Handler) SyllabusAddPage(c *gin.Context) {
	subList, _ := h.svr.AllSubject()

	c.HTML(200, "admin/syllabus-add.html", gin.H{
		"subjectList": subList,
	})
}

func (h *Handler) SyllabusListPage(c *gin.Context) {
	c.HTML(200, "admin/syllabus-list.html", gin.H{})
}

func (h *Handler) SyllabusEditPage(c *gin.Context) {
	sid := c.Query("id")
	id, _ := strconv.Atoi(sid)
	syllabus, _ := h.svr.SelectSyllabusById(uint(id))
	subList, _ := h.svr.AllSubject()
	c.HTML(200, "admin/syllabus-edit.html", gin.H{
		"syllabus":    syllabus,
		"subjectList": subList,
	})
}

func (h *Handler) SyllabusList(c *gin.Context) {

	query := model.SyllabusQuery{}

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
	list, total := h.svr.SelectSyllabusAll(model.SyllabusQuery{})
	http.Response(c, 200, "获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}

func (h *Handler) SyllabusListOld(c *gin.Context) {

	query := model.SyllabusQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	list, _ := h.svr.SyllabusList(query)
	http.Response(c, 200, "获取成功!", gin.H{
		"list": list,
	})
}

func (h *Handler) SyllabusById(c *gin.Context) {
	query := model.SyllabusQuery{}

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
