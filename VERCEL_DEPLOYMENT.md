# 🚀 CheVera V2: Vercel Deployment Guide

Since we are deploying the **React 19** frontend as a high-performance static site, Vercel is the perfect choice for zero-lag global delivery.

## 🛠️ Step 1: Prepare the Codebase
Ensure your `web-client` directory is ready for production.

1.  **Open Terminal** in `/chevera-v2/web-client`.
2.  **Run Build Test:**
    ```bash
    npm run build
    ```
    *Ensure this completes with "built in X.Xs" and no red errors.*

## ⬆️ Step 2: Push to GitHub
Vercel works best when linked to a GitHub repository.

1.  Create a new repository on [GitHub](https://github.com/new) called `chevera-v2`.
2.  Push your code (from the `chevera-v2` root):
    ```bash
    git init
    git add .
    git commit -m "Initial release: The Architect's Canvas"
    git remote add origin https://github.com/YOUR_USERNAME/chevera-v2.git
    git push -u origin main
    ```

## 🌐 Step 3: Deploy on Vercel
1.  Log in to [Vercel.com](https://vercel.com).
2.  Click **"Add New" -> "Project"**.
3.  Import your `chevera-v2` repository.
4.  **Configure Project:**
    *   **Framework Preset:** Vite
    *   **Root Directory:** `web-client` (CRITICAL: Click 'Edit' next to the project name and point it to the `web-client` folder).
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
5.  Click **"Deploy"**.

## 🔧 Step 4: Handle Client-Side Routing
Because we use `react-router-dom`, you need to tell Vercel to redirect all traffic to `index.html`. 

**I have already created a `vercel.json` file in your `web-client` folder for this.**

---

### ✅ Post-Deployment Checks
*   Check `https://your-project.vercel.app`
*   Verify that clicking "Exhibits" or "Our Services" doesn't give a 404 on refresh.
*   Ensure the WhatsApp and Phone links work on mobile.
