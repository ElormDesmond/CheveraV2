package api

import (
	"encoding/json"
	"github.com/gofiber/fiber/v2"
	"github.com/user/chevera-v2-backend/internal/database"
)

func (s *Server) HandleGetProducts(c *fiber.Ctx) error {
	products, err := s.Store.GetProducts(c.Context())
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch vault items"})
	}
	return c.JSON(products)
}

func (s *Server) HandleGetProjects(c *fiber.Ctx) error {
	projects, err := s.Store.GetAllProjects(c.Context())
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch portfolio"})
	}
	return c.JSON(projects)
}

func (s *Server) HandleGetNews(c *fiber.Ctx) error {
	news, err := s.Store.GetLatestNews(c.Context())
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch updates"})
	}
	return c.JSON(news)
}

type InquiryRequest struct {
	FullName     string          `json:"full_name"`
	Email        string          `json:"email"`
	Phone        string          `json:"phone"`
	ServiceType  string          `json:"service_type"`
	Message      string          `json:"message"`
	EstimateData json.RawMessage `json:"estimate_data"`
}

func (s *Server) HandleCreateInquiry(c *fiber.Ctx) error {
	req := new(InquiryRequest)
	if err := c.BodyParser(req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid inquiry format"})
	}

	arg := database.CreateInquiryParams{
		FullName:    req.FullName,
		Email:       req.Email,
		Phone:       database.NewNullString(req.Phone),
		ServiceType: database.NewNullString(req.ServiceType),
		Message:     req.Message,
		EstimateData: database.NewNullRawMessage(req.EstimateData),
	}

	inquiry, err := s.Store.CreateInquiry(c.Context(), arg)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to submit inquiry"})
	}

	return c.Status(201).JSON(inquiry)
}
