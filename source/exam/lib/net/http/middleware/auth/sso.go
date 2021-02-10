package auth

import (
	"github.com/appleboy/gin-jwt"
	"github.com/gin-gonic/gin"
	gojwt "gopkg.in/dgrijalva/jwt-go.v3"
)

type CurrentUser struct {
	Id       int      `json:"id"`
	Username string   `json:"username"`
	Status   int      `json:"status"`
	Uniacid  int      `json:"uniacid,omitempty"`
	Uid      int      `json:"uid,omitempty"`
	Openid   string   `json:"openid,omitempty"`
	Nickname string   `json:"nickname,omitempty"`
	Realname string   `json:"realname,omitempty"`
	Mobile   string   `json:"mobile,omitempty"`
	Avatar   string   `json:"avatar,omitempty"`
	Usertype int      `json:"usertype"`
	Roles    []string `gorm:"-" json:"roles"`
}

const (
	USER_TYPE_ADMIN = iota
	USER_TYPE_TEACHER
	USER_TYPE_STUDENT
)

func PayloadFunc(data interface{}) jwt.MapClaims {
	if v, ok := data.(*CurrentUser); ok {
		return jwt.MapClaims{
			"id":       v.Id,
			"username": v.Username,
			"status":   v.Status,
			"uniacid":  v.Uniacid,
			"uid":      v.Uid,
			"openid":   v.Openid,
			"nickname": v.Nickname,
			"realname": v.Realname,
			"mobile":   v.Mobile,
			"avatar":   v.Avatar,
			"usertype": v.Usertype,
		}
	}
	return jwt.MapClaims{}
}

func IdentityHandler(claims gojwt.MapClaims) interface{} {

	u := &CurrentUser{}

	if id, ok := claims["id"]; ok {
		u.Id = int(id.(float64))
	}
	if username, ok := claims["username"]; ok {
		u.Username = username.(string)
	}
	if status, ok := claims["status"]; ok {
		u.Status = int(status.(float64))
	}
	if uniacid, ok := claims["uniacid"]; ok {
		u.Uniacid = int(uniacid.(float64))
	}
	if uid, ok := claims["uid"]; ok {
		u.Uid = int(uid.(float64))
	}
	if openid, ok := claims["openid"]; ok {
		u.Openid = openid.(string)
	}
	if nickname, ok := claims["nickname"]; ok {
		u.Nickname = nickname.(string)
	}
	if realname, ok := claims["realname"]; ok {
		u.Realname = realname.(string)
	}

	if mobile, ok := claims["mobile"]; ok {
		u.Mobile = mobile.(string)
	}
	if avatar, ok := claims["avatar"]; ok {
		u.Avatar = avatar.(string)
	}

	if userType, ok := claims["usertype"]; ok {
		u.Usertype = int(userType.(float64))
	}

	return u
}

func GetCurrentUser(c *gin.Context) (*CurrentUser, bool) {
	user, exists := c.Get("userID")
	if !exists {
		return nil, false
	}

	return user.(*CurrentUser), true
}
