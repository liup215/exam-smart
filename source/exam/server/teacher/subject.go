package teacher

import (
	"exam/lib/net/http"
	"exam/model"
	"strconv"

	"github.com/gin-gonic/gin"
)

func (h *Handler) SubjectListPage(c *gin.Context) {
	c.HTML(200, "admin/subject_list.html", gin.H{})
}

func (h *Handler) SubjectList(c *gin.Context) {
	query := model.SubjectQuery{}
	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}
	list, total := h.svr.SelectSubjectList(query)
	c.JSON(200, gin.H{
		"code":  0,
		"msg":   "数据获取成功",
		"count": total,
		"data":  list,
	})
}

func (h *Handler) SubjectAddPage(c *gin.Context) {
	c.HTML(200, "admin/subject_add.html", gin.H{})
}

func (h *Handler) SubjectAdd(c *gin.Context) {
	var sub model.Subject
	if err := c.BindJSON(&sub); err != nil {
		http.Response(c, 400, "参数解析失败!", gin.H{})
		return
	}

	if err := h.svr.SubjectAdd(sub); err != nil {
		http.Response(c, 400, "添加失败!", gin.H{})
		return
	}

	http.Response(c, 200, "添加成功!", gin.H{})
}

func (h *Handler) SubjectEdit(c *gin.Context) {
	var sub model.Subject
	if err := c.BindJSON(&sub); err != nil {
		http.Response(c, 400, "参数解析失败!"+err.Error(), gin.H{})
		return
	}

	if err := h.svr.SubjectEdit(sub); err != nil {
		http.Response(c, 400, "编辑失败!"+err.Error(), gin.H{})
		return
	}

	http.Response(c, 200, "编辑成功!", gin.H{})
}

func (h *Handler) SubjectListOld(c *gin.Context) {

	query := model.SubjectQuery{}
	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}
	list, total := h.svr.SelectSubjectList(query)

	http.Response(c, 200, "数据获取成功", gin.H{
		"list":    list,
		"total":   total,
		"pageNum": query.PageIndex,
	})
}

func (h *Handler) SubjectSelectById(c *gin.Context) {
	sid := c.Param("id")

	id, err := strconv.Atoi(sid)
	if err != nil {
		http.Response(c, 400, "参数格式错误!", gin.H{})
		return
	}

	if sub, err := h.svr.SelectSubjectById(uint(id)); err != nil {
		http.Response(c, 400, "查无该科目!", gin.H{})
		return
	} else {
		http.Response(c, 200, "查询成功!", sub)
	}

}

func (h *Handler) SubjectAll(c *gin.Context) {
	list, total := h.svr.AllSubject()

	http.Response(c, 200, "数据获取成功", gin.H{
		"list":  list,
		"total": total,
	})
}
