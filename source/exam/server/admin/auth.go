package admin

import (
	"errors"
	"exam/lib/net/http"
	"exam/lib/net/http/middleware/auth"
	"exam/model"

	"github.com/gin-contrib/sessions"

	"github.com/gin-gonic/gin"
)

func (h *Handler) LoginPage(c *gin.Context) {
	s := sessions.Default(c)
	uid := s.Get("CurrentUser")
	if uid != nil {
		c.Redirect(307, "/admin/index")
	}
	c.HTML(200, "admin/login.html", gin.H{})
}

func (h *Handler) Login(c *gin.Context) {
	var login Login
	if err := c.Bind(&login); err != nil {
		http.Response(c, 400, "参数解析失败!", nil)
		return
	}

	// 登录过程验证
	u, result := h.svr.AuthUser(login.Username, login.Password)
	if !result {
		http.Response(c, 400, "账号密码错误", gin.H{})
		return
	}

	// 用户状态验证
	if u.Status == model.USER_STATUS_DISABLE {
		http.Response(c, 400, "用户已禁用!", gin.H{})
		return
	}

	s := sessions.Default(c)
	s.Set("CurrentUser", u.ID)

	s.Save()

	http.Response(c, 200, "登录成功！", gin.H{})

}

type Login struct {
	Username string `json:"username" form:"username" binding:"required"`
	Password string `json:"password" form:"password" binding:"required"`
}

func (h *Handler) Authenticator(c *gin.Context) (interface{}, error) {
	var login Login

	if err := c.Bind(&login); err != nil {
		return nil, errors.New("登录参数错误")
	}

	// 登录过程验证
	u, result := h.svr.AuthUser(login.Username, login.Password)
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

func (h *Handler) Unauthorized(c *gin.Context, code int, message string) {
	http.Response(c, code, message, nil)
}

func (h *Handler) GetUserInfo(c *gin.Context) {
	u, _ := auth.GetCurrentUser(c)
	u.Roles = []string{"admin"}
	http.Response(c, 200, "信息获取成功", u)

}
