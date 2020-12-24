package util

import (
	"exam/lib/net/http"

	"github.com/gin-gonic/gin"
)

const (
	DIST = "static/uploads/"
)

func (h *Handler) UploadImage(c *gin.Context) {
	file, err := c.FormFile("file")

	if err != nil {
		c.JSON(200, gin.H{
			"code": 400,
			"msg":  "文件获取失败:" + err.Error(),
		})
		return
	}

	img, err := h.svr.NewImage()
	if err != nil {
		c.JSON(200, gin.H{
			"code": 400,
			"msg":  "文件添加失败:" + err.Error(),
		})
		return
	}

	file.Filename = img.Name
	err = c.SaveUploadedFile(file, DIST+file.Filename)
	if err != nil {
		c.JSON(200, gin.H{
			"code": 400,
			"msg":  "文件添加失败:" + err.Error(),
		})
		return
	}

	c.JSON(200, gin.H{
		"code": 0,
		"msg":  "文件上传成功",
		"data": "/" + DIST + file.Filename,
	})
}

func (h *Handler) UploadToken(c *gin.Context) {
	token := h.svr.UploadToken()
	key, _ := h.svr.GenerateImageName()
	http.Response(c, 200, "获取成功", gin.H{
		"token": token,
		"key":   key,
	})
}
