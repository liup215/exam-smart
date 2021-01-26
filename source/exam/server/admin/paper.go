package admin

import (
	"exam/lib/net/http"
	"exam/model"
	"strconv"

	"github.com/gin-gonic/gin"
)

func (h *Handler) PastPaperEdit(c *gin.Context) {
	p := model.PastPaper{}

	if err := c.BindJSON(&p); err != nil {
		http.Response(c, 400, "参数解析失败："+err.Error(), gin.H{})
		return
	}

	var err error
	if p.ID == 0 {
		err = h.svr.PastPaperAdd(p)
	} else {
		err = h.svr.PastPaperEdit(p)
	}
	if err != nil {
		http.Response(c, 400, "编辑失败,"+err.Error(), gin.H{})
		return
	}

	http.Response(c, 200, "编辑成功！", gin.H{})
}

func (h *Handler) PastPaperList(c *gin.Context) {
	p := model.PastPaperQuery{}
	if err := c.BindJSON(&p); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), gin.H{})
		return
	}

	list, total := h.svr.PastPaperList(p)
	http.Response(c, 200, "数据获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}

func (h *Handler) PastPaperById(c *gin.Context) {
	p := model.PastPaperQuery{}
	if err := c.BindJSON(&p); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), gin.H{})
		return
	}

	paper, err := h.svr.PastPaperById(p.ID)
	if err != nil {
		http.Response(c, 400, "数据获取失败, "+err.Error(), gin.H{})
		return
	}

	http.Response(c, 200, "数据获取成功!", paper)
}

func (h *Handler) ExamPaperEdit(c *gin.Context) {
	paper := model.ExamPaper{}

	if err := c.BindJSON(&paper); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), gin.H{})
		return
	}

	examPaper, err := h.svr.SavePaper(paper)
	if err != nil {
		http.Response(c, 400, "保存失败, "+err.Error(), gin.H{})
		return
	}

	http.Response(c, 200, "保存成功!", examPaper)

}

func (h *Handler) ExamPaperList(c *gin.Context) {
	p := model.ExamPaperQuery{}

	if err := c.BindJSON(&p); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), gin.H{})
		return
	}

	list, total := h.svr.ExamPaperList(p)

	http.Response(c, 200, "查询成功!", gin.H{
		"list":  list,
		"total": total,
	})
}

func (h *Handler) ExamPaperById(c *gin.Context) {
	p := model.ExamPaperQuery{}
	if err := c.BindJSON(&p); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), gin.H{})
		return
	}

	paper, err := h.svr.ExamPaperById(p.ID)

	if err != nil {
		http.Response(c, 400, "试卷获取失败: "+err.Error(), gin.H{})
		return
	}

	http.Response(c, 200, "试卷获取成功!", paper)
}

func (h *Handler) ExamPaperDownload(c *gin.Context) {
	idStr := c.Query("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Response(c, 400, "无效的ID", gin.H{})
		c.String(200, "试卷下载失败: "+err.Error())
		return
	}

	path, fileName, err := h.svr.ExamPaperExportToDox(uint(id))
	if err != nil {
		c.String(200, "试卷下载失败："+err.Error())
		return
	}

	c.Header("Content-Disposition", "attachment;filename="+fileName)
	c.Header("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document .docx")

	c.File(path)

}

func (h *Handler) YearAdd(c *gin.Context) {
	year := model.Year{}
	if err := c.BindJSON(&year); err != nil {
		http.Response(c, 400, "添加失败: "+err.Error(), nil)
		return
	}

	y, err := h.svr.YearAdd(year)
	if err != nil {
		http.Response(c, 400, "添加失败: "+err.Error(), nil)
		return
	}

	http.Response(c, 200, "添加成功!", y)
}

func (h *Handler) YearEdit(c *gin.Context) {
	year := model.Year{}
	if err := c.BindJSON(&year); err != nil {
		http.Response(c, 400, "编辑失败: "+err.Error(), nil)
		return
	}

	y, err := h.svr.YearEdit(year)
	if err != nil {
		http.Response(c, 400, "编辑失败: "+err.Error(), nil)
		return
	}

	http.Response(c, 200, "编辑成功!", y)
}

func (h *Handler) SelectYearById(c *gin.Context) {
	idStr := c.Query("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Response(c, 400, "查询失败: 无效的ID", nil)
		return
	}

	y, err := h.svr.SelectYearById(uint(id))

	if err != nil {
		http.Response(c, 400, "查询失败: "+err.Error(), nil)
		return
	}

	http.Response(c, 200, "数据获取成功!", y)
}

func (h *Handler) SelectYearAll(c *gin.Context) {
	list, total := h.svr.SelectYearAll(model.YearQuery{})
	http.Response(c, 200, "数据获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}

func (h *Handler) SelectYearList(c *gin.Context) {
	q := model.YearQuery{}

	if err := c.BindJSON(&q); err != nil {
		http.Response(c, 400, "数据获取失败: "+err.Error(), nil)
		return
	}

	list, total := h.svr.SelectYearList(q)

	http.Response(c, 200, "数据获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}

func (h *Handler) SeriesAdd(c *gin.Context) {
	series := model.Series{}
	if err := c.BindJSON(&series); err != nil {
		http.Response(c, 400, "添加失败: "+err.Error(), nil)
		return
	}

	s, err := h.svr.SeriesAdd(series)
	if err != nil {
		http.Response(c, 400, "添加失败: "+err.Error(), nil)
		return
	}

	http.Response(c, 200, "添加成功!", s)
}

func (h *Handler) SeriesEdit(c *gin.Context) {
	series := model.Series{}
	if err := c.BindJSON(&series); err != nil {
		http.Response(c, 400, "编辑失败: "+err.Error(), nil)
		return
	}

	s, err := h.svr.SeriesEdit(series)
	if err != nil {
		http.Response(c, 400, "编辑失败: "+err.Error(), nil)
		return
	}

	http.Response(c, 200, "编辑成功!", s)
}

func (h *Handler) SelectSeriesById(c *gin.Context) {
	idStr := c.Query("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Response(c, 400, "查询失败: 无效的ID", nil)
		return
	}

	s, err := h.svr.SelectSeriesById(uint(id))

	if err != nil {
		http.Response(c, 400, "查询失败: "+err.Error(), nil)
		return
	}

	http.Response(c, 200, "数据获取成功!", s)
}

func (h *Handler) SelectSeriesList(c *gin.Context) {
	q := model.SeriesQuery{}

	if err := c.BindJSON(&q); err != nil {
		http.Response(c, 400, "数据获取失败: "+err.Error(), nil)
		return
	}

	list, total := h.svr.SelectSeriesList(q)

	http.Response(c, 200, "数据获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}

func (h *Handler) SelectSeriesAll(c *gin.Context) {
	list, total := h.svr.SelectSeriesAll(model.SeriesQuery{})
	http.Response(c, 200, "数据获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}

func (h *Handler) CodeAdd(c *gin.Context) {
	code := model.Code{}
	if err := c.BindJSON(&code); err != nil {
		http.Response(c, 400, "添加失败: "+err.Error(), nil)
		return
	}

	co, err := h.svr.CodeAdd(code)
	if err != nil {
		http.Response(c, 400, "添加失败: "+err.Error(), nil)
		return
	}

	http.Response(c, 200, "添加成功!", co)
}

func (h *Handler) CodeEdit(c *gin.Context) {
	code := model.Code{}
	if err := c.BindJSON(&code); err != nil {
		http.Response(c, 400, "编辑失败: "+err.Error(), nil)
		return
	}

	co, err := h.svr.CodeEdit(code)
	if err != nil {
		http.Response(c, 400, "编辑失败: "+err.Error(), nil)
		return
	}

	http.Response(c, 200, "编辑成功!", co)
}

func (h *Handler) SelectCodeById(c *gin.Context) {
	idStr := c.Query("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Response(c, 400, "查询失败: 无效的ID", nil)
		return
	}

	co, err := h.svr.SelectCodeById(uint(id))

	if err != nil {
		http.Response(c, 400, "查询失败: "+err.Error(), nil)
		return
	}

	http.Response(c, 200, "数据获取成功!", co)
}

func (h *Handler) SelectCodeList(c *gin.Context) {
	q := model.CodeQuery{}

	if err := c.BindJSON(&q); err != nil {
		http.Response(c, 400, "数据获取失败: "+err.Error(), nil)
		return
	}

	list, total := h.svr.SelectCodeList(q)

	http.Response(c, 200, "数据获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}

func (h *Handler) SelectCodeAll(c *gin.Context) {
	list, total := h.svr.SelectCodeAll(model.CodeQuery{})
	http.Response(c, 200, "数据获取成功!", gin.H{
		"list":  list,
		"total": total,
	})
}
