package main

import (
	"log"

	"github.com/user/chevera-v2-backend/internal/api"
	"github.com/user/chevera-v2-backend/internal/config"
)

func main() {
	cfg := config.LoadConfig()

	server := api.NewServer(cfg)
	server.SetupRouter()

	log.Fatal(server.App.Listen(":" + cfg.Port))
}
