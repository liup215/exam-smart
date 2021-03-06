package admin

import (
	"exam/dao"
	"exam/lib/net/http"
	"exam/model"

	"github.com/gin-gonic/gin"
)

func (h *Handler) ChapterListBySyllabus(c *gin.Context) {
	q := dao.ChapterQuery{}
	if err := c.BindJSON(&q); err != nil {
		http.Response(c, 400, "参数解析失败,"+err.Error(), nil)
		return
	}

	if q.SyllabusId == 0 {
		http.Response(c, 400, "SyllabusId不能为空", nil)
		return
	}

	list, total := h.svr.ChapterListBySyllabus(q.SyllabusId)
	c.JSON(200, gin.H{
		"code":  0,
		"count": total,
		"data":  list,
		"sid":   q.SyllabusId,
	})

}

func (h *Handler) ChapterList(c *gin.Context) {

	query := dao.ChapterQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败, "+err.Error(), nil)
		return
	}

	list, _ := h.svr.ChapterList(query)
	http.Response(c, 200, "获取成功!", list)
}

func (h *Handler) ChapterAdd(c *gin.Context) {
	chapter := model.Chapter{}

	if err := c.BindJSON(&chapter); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	err := h.svr.ChapterAdd(chapter)

	if err != nil {
		http.Response(c, 400, err.Error(), nil)
		return
	} else {
		http.Response(c, 200, "添加成功", nil)
	}
}

func (h *Handler) ChapterTree(c *gin.Context) {
	query := dao.ChapterQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, err.Error(), nil)
		return
	}

	tree := h.svr.ChapterTree(query.SyllabusId)

	http.Response(c, 200, "获取成功！", gin.H{
		"list": tree,
	})
}

func (h *Handler) ChapterUpdate(c *gin.Context) {
	chapter := model.Chapter{}

	if err := c.BindJSON(&chapter); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	chpt, err := h.svr.ChapterById(chapter.ID)
	if err != nil {
		http.Response(c, 400, "章节查询失败,"+err.Error(), nil)
		return
	}

	chpt.Name = chapter.Name

	if err := h.svr.ChapterUpdate(chpt); err != nil {
		http.Response(c, 400, err.Error(), nil)
		return
	} else {
		http.Response(c, 200, "添加成功", nil)
	}
}

func (h *Handler) ChapterDelete(c *gin.Context) {
	query := dao.ChapterQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	err := h.svr.ChapterDelete(query.ID)
	if err != nil {
		http.Response(c, 200, "删除失败: "+err.Error(), nil)
		return
	} else {
		http.Response(c, 200, "删除成功", nil)
	}
}
