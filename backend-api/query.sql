-- name: GetProducts :many
SELECT * FROM products ORDER BY created_at DESC;

-- name: GetProductBySlug :one
SELECT * FROM products WHERE slug = $1 LIMIT 1;

-- name: CreateProduct :one
INSERT INTO products (name, slug, description, price, category, image_url, stock_level, is_featured, metadata)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING *;

-- name: GetHighlightedProjects :many
SELECT * FROM projects WHERE is_highlight = TRUE ORDER BY completion_year DESC;

-- name: GetAllProjects :many
SELECT * FROM projects ORDER BY created_at DESC;

-- name: CreateInquiry :one
INSERT INTO inquiries (full_name, email, phone, service_type, message, estimate_data)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;

-- name: GetAdminByEmail :one
SELECT * FROM admins WHERE email = $1 LIMIT 1;

-- name: GetLatestNews :many
SELECT * FROM news ORDER BY published_at DESC LIMIT 5;
