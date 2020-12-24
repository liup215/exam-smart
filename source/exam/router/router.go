package router

import (
	"exam/conf"
	"exam/controller"
	"exam/lib/net/http/middleware/auth"
	"exam/lib/net/http/middleware/cors"

	"github.com/gin-gonic/gin"
)

func Router(r *gin.Engine) {
	r.Use(cors.Cors())

	r.GET("/base", controller.BashController)
	authMiddleware := auth.New(conf.Conf.Auth)
	authMiddleware.PayloadFunc = auth.PayloadFunc
	authMiddleware.IdentityHandler = auth.IdentityHandler
	authMiddleware.Authenticator = controller.Authenticator
	authMiddleware.Unauthorized = controller.Unauthorized

	r.POST("/login", authMiddleware.LoginHandler)
	r.Use(authMiddleware.MiddlewareFunc())
	r.GET("/info", controller.GetUserInfo)

	adminGroup := r.Group("/admin")

	adminRouter(adminGroup)

}
