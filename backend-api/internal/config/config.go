package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	DBURL     string
	JWTSecret string
	Port      string
}

func LoadConfig() *Config {
	if err := godotenv.Load(); err != nil {
		log.Println("Note: .env file not found, using system environment variables")
	}

	return &Config{
		DBURL:     getEnv("DB_URL", "postgres://chevera_admin:obsidian_amber_2026@localhost:5432/chevera_v2?sslmode=disable"),
		JWTSecret: getEnv("JWT_SECRET", "chevera_v2_ultra_secure_masterpiece"),
		Port:      getEnv("PORT", "8080"),
	}
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}
