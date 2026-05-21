-- CheVera V2: PostgreSQL Schema (Obsidian & Amber Edition)

-- 1. STORE VAULT (Building Materials & Art)
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    price DECIMAL(12, 2) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'roofing', 'paint', 'art'
    image_url TEXT,
    stock_level INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    metadata JSONB DEFAULT '{}', -- For specific details like 'texture' or 'paint_base'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. ARCHITECT'S PORTFOLIO
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    client VARCHAR(255),
    location VARCHAR(255),
    category VARCHAR(50) NOT NULL, -- 'residential', 'commercial', 'interior'
    summary TEXT NOT NULL,
    thumbnail_url TEXT NOT NULL,
    gallery_urls TEXT[], -- Array of image strings
    completion_year INTEGER,
    is_highlight BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. INQUIRIES & ESTIMATES
CREATE TABLE inquiries (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    service_type VARCHAR(50), -- 'architecture', 'engineering', 'materials'
    message TEXT NOT NULL,
    estimate_data JSONB, -- Stores the custom multi-step estimator results
    status VARCHAR(20) DEFAULT 'new', -- 'new', 'archived', 'responded'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. NEWS & UPDATES
CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image_url TEXT,
    published_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. ADMIN VAULT
CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    last_login TIMESTAMP WITH TIME ZONE
);
