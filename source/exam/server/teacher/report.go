package teacher

import (
	"exam/lib/net/http"
	"exam/model"

	"github.com/gin-gonic/gin"
)

func (h *Handler) ReportSubjectList(c *gin.Context) {
	list := h.svr.ReportSubjectList()
	http.Response(c, 200, "获取成功!", list)
}

func (h *Handler) ReportHistoryList(c *gin.Context) {

	list := h.svr.ReportHistoryList()
	http.Response(c, 200, "获取成功!", list)
}

func (h *Handler) ReportHistoryAdd(c *gin.Context) {
	his := model.ReportHistory{}
	if err := c.BindJSON(&his); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	err := h.svr.ReportHistoryAdd(his)

	if err != nil {
		http.Response(c, 400, "添加失败: "+err.Error(), nil)
		return
	}
	http.Response(c, 200, "获取成功!", nil)
}

func (h *Handler) SubjectReportEdit(c *gin.Context) {
	r := model.SubjectReport{}
	if err := c.BindJSON(&r); err != nil {
		http.Response(c, 400, "参数绑定失败,"+err.Error(), nil)
		return
	}

	if err := h.svr.SubjectReportEdit(r); err != nil {
		http.Response(c, 400, "更新失败,"+err.Error(), nil)
		return
	}

	http.Response(c, 200, "更新成功!", nil)
}

func (h *Handler) SubjectReportList(c *gin.Context) {
	q := model.SubjectReportQuery{}

	if err := c.BindJSON(&q); err != nil {
		http.Response(c, 400, "参数解析失败,"+err.Error(), nil)
		return
	}

	if q.PageIndex <= 0 {
		q.PageIndex = 1
	}

	list, total := h.svr.SubjectReportList(q)

	http.Response(c, 200, "获取成功!", gin.H{
		"list":      list,
		"total":     total,
		"pageIndex": q.PageIndex,
	})
}

func (h *Handler) HometeacherReportEdit(c *gin.Context) {
	r := model.HometeacherReport{}
	if err := c.BindJSON(&r); err != nil {
		http.Response(c, 400, "参数绑定失败,"+err.Error(), nil)
		return
	}

	if err := h.svr.HometeacherReportEdit(r); err != nil {
		http.Response(c, 400, "更新失败,"+err.Error(), nil)
		return
	}

	http.Response(c, 200, "更新成功!", nil)
}

func (h *Handler) HometeacherReportList(c *gin.Context) {
	q := model.HometeacherReportQuery{}

	if err := c.BindJSON(&q); err != nil {
		http.Response(c, 400, "参数解析失败,"+err.Error(), nil)
		return
	}

	if q.PageIndex <= 0 {
		q.PageIndex = 1
	}

	list, total := h.svr.HometeacherReportList(q)

	http.Response(c, 200, "获取成功!", gin.H{
		"list":      list,
		"total":     total,
		"pageIndex": q.PageIndex,
	})
}
