package api

import (
	"database/sql"
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	_ "github.com/lib/pq"
	"github.com/user/chevera-v2-backend/internal/config"
	"github.com/user/chevera-v2-backend/internal/database"
)

type Server struct {
	App    *fiber.App
	DB     *sql.DB
	Config *config.Config
	Store  *database.Queries
}

func NewServer(cfg *config.Config) *Server {
	var db *sql.DB
	var err error

	// Retry loop for database connection
	for i := 0; i < 10; i++ {
		db, err = sql.Open("postgres", cfg.DBURL)
		if err == nil {
			err = db.Ping()
			if err == nil {
				break
			}
		}
		log.Printf("Waiting for database... attempt %d/10", i+1)
		time.Sleep(2 * time.Second)
	}

	if err != nil {
		log.Fatal("Could not connect to database after 10 attempts:", err)
	}

	log.Println("Database connection established")

	app := fiber.New(fiber.Config{
		AppName: "CheVera V2: The Architect's Canvas",
	})

	return &Server{
		App:    app,
		DB:     db,
		Config: cfg,
		Store:  database.New(db),
	}
}

func (s *Server) SetupRouter() {
	api := s.App.Group("/api")

	// Public Routes
	api.Get("/health", s.HandleHealth)
	api.Get("/products", s.HandleGetProducts)
	api.Get("/projects", s.HandleGetProjects)
	api.Post("/inquiries", s.HandleCreateInquiry)
	api.Get("/news", s.HandleGetNews)

	// Auth (Phase 4)
	// api.Post("/auth/login", s.HandleLogin)
}

func (s *Server) HandleHealth(c *fiber.Ctx) error {
	return c.Status(200).JSON(fiber.Map{
		"status": "active",
		"engine": "Obsidian & Amber 2.0",
	})
}
