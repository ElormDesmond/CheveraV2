# CheVera V2 - Resource Document

## Introduction
"The Architect's Canvas" is a premium, from-scratch redesign of the CheVera Company website. It transitions the brand from a traditional corporate site to a high-end architectural studio experience, focusing on immersive visual storytelling and ultra-low latency.

## Frameworks & UI
*   **Frontend:** React 19 (Strict Mode), Vite 8.
*   **Styling:** Tailwind CSS 4.0 (Obsidian & Amber design system).
*   **Animations:** Framer Motion (Hardware-accelerated physics).
*   **State & Data:** TanStack Query (Query v5), Zustand (Persistent storage).
*   **Backend:** Go 1.26 with Fiber v2.
*   **Database:** PostgreSQL with SQLC (Type-safe SQL generation).
*   **Infrastructure:** Multi-container Docker orchestration.

## Step-by-Step Structure
1.  **Architecture Setup:** Scaffolded a clean-slate monorepo (`chevera-v2`) with separate API and Client contexts.
2.  **Visual Language:** Implemented the "Obsidian & Amber" theme, using matte blacks and vibrant orange accents for a high-end feel.
3.  **Core Features:** 
    *   Developed a horizontal-scroll "Exhibit" gallery for projects.
    *   Created an interactive "Transformation Slider" for 3D vs. Reality comparisons.
    *   Built the "Vault" (Store) with high-performance masonry filtering.
4.  **Backend Engineering:** Implemented a reflection-free Go API with database retry logic and health checks.
5.  **Integration:** Connected the frontend via TanStack Query hooks with local fallback data for zero-downtime reliability.

## Key Protocols
*   **Port 5173:** Studio Web Client
*   **Port 8081:** Studio API
*   **Port 5434:** Vault Database
