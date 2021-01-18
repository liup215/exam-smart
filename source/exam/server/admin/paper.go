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

	path, err := h.svr.ExamPaperExportToDox(uint(id))
	if err != nil {
		c.String(200, "试卷下载失败："+err.Error())
		return
	}

	c.File(path)

}
