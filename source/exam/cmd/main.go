package main

import (
	"exam/conf"
	"exam/server"
)

func main() {
	if err := conf.Init(); err != nil {
		panic(err)
	}
	server.Init(conf.Conf)
}
