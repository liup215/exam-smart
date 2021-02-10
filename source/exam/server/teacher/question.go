package teacher

import (
	"strconv"

	"github.com/gin-gonic/gin"

	"exam/dao"
	"exam/lib/net/http"
	"exam/model"
)

func (h *Handler) QuestionList(c *gin.Context) {
	query := dao.QuestionQuery{}

	if err := c.BindJSON(&query); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	list, total := h.svr.SelectQuestionList(query)

	http.Response(c, 200, "数据获取成功!", gin.H{
		"list":    list,
		"total":   total,
		"pageNum": query.PageIndex,
	})

}

func (h *Handler) QuestionById(c *gin.Context) {
	id := c.Query("id")
	qid, err := strconv.Atoi(id)
	if err != nil {
		http.Response(c, 400, "无效的题目ID!", gin.H{})
		return
	}

	vm, err := h.svr.QuestionById(uint(qid))

	if err != nil {
		http.Response(c, 400, "题目获取失败！ "+err.Error(), gin.H{})
		return
	}

	http.Response(c, 200, "获取成功!", vm)

}

func (h *Handler) QuestionAddOrEdit(c *gin.Context) {
	q := model.Question{}

	if err := c.BindJSON(&q); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

	var err error
	if q.ID == uint(0) {
		err = h.svr.QuestionAdd(q)
	} else {
		err = h.svr.QuestionEdit(q)
	}
	message := "添加成功"
	if err != nil {
		message = "添加失败, " + err.Error()
	}

	if err != nil {
		http.Response(c, 400, message, nil)
		return
	} else {
		http.Response(c, 200, message, nil)
	}
}

func (h *Handler) QuestionDeleteChapter(c *gin.Context) {
	q := dao.QuestionToChapterQuery{}
	if err := c.BindJSON(&q); err != nil {
		http.Response(c, 400, "参数解析失败: "+err.Error(), nil)
		return
	}

}
