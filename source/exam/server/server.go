package server

import (
	"exam/conf"
	"exam/lib/net/http/middleware/cors"
	"exam/server/admin"
	"exam/server/teacher"
	"exam/server/util"
	"exam/service"
	"fmt"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

func Init(c *conf.Config) {

	r := gin.Default()

	router(r, c)

	r.Run(fmt.Sprintf(":%s", c.Http.Port))
}

func router(r *gin.Engine, c *conf.Config) {
	store := cookie.NewStore([]byte("secret"))
	r.Use(sessions.Sessions("exam_smart_sid", store))
	r.Use(cors.Cors())

	svr := service.New(c)

	// 初始化用户
	svr.InitUser()

	utilGroup := r.Group("/util")
	utilHandle := util.NewHandlerFromService(svr)
	utilHandle.Route(utilGroup)

	adminGroup := r.Group("/admin")
	adminHandle := admin.NewHandlerFromService(svr)
	adminHandle.Route(adminGroup)

	teacherGroup := r.Group("/teacher")
	teacherHandle := teacher.NewHandlerFromService(svr)
	teacherHandle.Route(teacherGroup)
}
