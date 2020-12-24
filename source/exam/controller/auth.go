package controller

import (
	"errors"
	"exam/controller/base"
	"exam/lib/net/http"
	"exam/lib/net/http/middleware/auth"
	"exam/model"

	"github.com/gin-gonic/gin"
)

type Login struct {
	Username string `json:"username" form:"username" binding:"required"`
	Password string `json:"password" form:"password" binding:"required"`
}

func Authenticator(c *gin.Context) (interface{}, error) {
	var login Login

	if err := c.Bind(&login); err != nil {
		return nil, errors.New("登录参数错误")
	}

	// 登录过程验证
	u, result := base.Svr.AuthUser(login.Username, login.Password)
	if !result {
		return nil, errors.New("用户名或密码错误")
	}

	// 用户状态验证
	if u.Status == model.USER_STATUS_DISABLE {
		return nil, errors.New("用户被禁用")
	}

	return &auth.CurrentUser{
		Username: u.UserName,
		Status:   u.Status,
		Usertype: auth.USER_TYPE_ADMIN,
	}, nil

}

func Unauthorized(c *gin.Context, code int, message string) {
	http.Response(c, code, message, nil)
}

func GetUserInfo(c *gin.Context) {
	u, _ := auth.GetCurrentUser(c)
	u.Roles = []string{"admin"}
	http.Response(c, 200, "信息获取成功", u)

}
