package admin

import (
	"exam/lib/net/http"
	"exam/model"

	"github.com/gin-gonic/gin"
)

func (h *Handler) QuestionToChapterAdd(c *gin.Context) {
	qToC := model.QuestionToChapter{}

	if err := c.BindJSON(&qToC); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	q, err := h.svr.QuestionToChapterAdd(qToC)
	if err != nil {
		http.Response(c, 400, "添加失败: "+err.Error(), nil)
		return
	}

	http.Response(c, 200, "添加成功!", q)
}

func (h *Handler) QuestionToChapterDelete(c *gin.Context) {
	qToC := model.QuestionToChapter{}
	if err := c.BindJSON(&qToC); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	if err := h.svr.QuestionToChapterDelete(qToC.ID); err != nil {
		http.Response(c, 400, "删除失败: "+err.Error(), nil)
	} else {
		http.Response(c, 200, "删除成功!", nil)
	}
}
