# React Portfolio Application

This is a modern, responsive, and performance-optimized professional portfolio built with React and Vite. It utilizes lazy loading for faster page loads and a custom dark mode Vanilla CSS design system for a premium aesthetic.

## Features
- **Responsive Design**: Adapts beautifully to mobile, tablet, and desktop devices.
- **Performance Optimized**: Uses `React.lazy()` and `<Suspense>` for code splitting and lazy loading of sections. Images are optimized with `loading="lazy"`.
- **Custom Design System**: Built with Vanilla CSS utilizing CSS variables, Flexbox, CSS Grid, and modern glassmorphism effects.
- **Sections**: Navbar, Hero/About, Projects, Skills, Resume Download, Contact Form, and Footer.

## Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view it in the browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   This generates a `dist` folder containing the optimized production build.

4. **Preview Production Build Locally**:
   ```bash
   npm run preview
   ```

## Deployment Guide

You can easily deploy this Vite application to any modern hosting provider. Here are instructions for the most popular platforms:

### 1. Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
3. Click "Add New..." -> "Project".
4. Import your repository.
5. Vercel will automatically detect that it's a Vite project. The Build Command should be `npm run build` and Output Directory should be `dist`.
6. Click "Deploy".

### 2. Netlify
1. Push your code to a GitHub repository.
2. Log into [Netlify](https://www.netlify.com/).
3. Click "Add new site" -> "Import an existing project".
4. Connect to GitHub and select your repository.
5. Set Build Command to `npm run build` and Publish Directory to `dist`.
6. Click "Deploy site".

### 3. GitHub Pages
1. Install the `gh-pages` package as a dev dependency:
   ```bash
   npm install gh-pages --save-dev
   ```
2. In `package.json`, add `"homepage": "https://<username>.github.io/<repo-name>",` at the top level.
3. In `package.json` under `"scripts"`, add:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. If your repo name is not the root domain (e.g., `username.github.io`), update `vite.config.js` to include `base: '/<repo-name>/',`.
5. Run `npm run deploy`.

## Custom Domains & SSL

All three providers mentioned above offer free SSL certificates automatically generated via Let's Encrypt.
To configure a custom domain:
1. Buy a domain from a registrar (e.g., Namecheap, Google Domains).
2. Go to the "Domain Management" or "Custom Domains" section in Vercel/Netlify/GitHub Pages.
3. Enter your domain name.
4. The dashboard will provide you with DNS records (typically A Records and/or CNAME Records).
5. Add these DNS records to your domain registrar's DNS settings.
6. Once DNS propagates (can take up to 24 hours), your site will be live on your custom domain with a secure `https://` connection!

## Challenges & Solutions during Development
- **Challenge**: Monolithic bundle size causing slow initial load.
  **Solution**: Implemented `React.lazy()` for below-the-fold sections (Projects, Skills, Contact, Resume) and used Vite to split the vendor code from the application code automatically.
- **Challenge**: Writing a complex, modern design without heavy frameworks (like Tailwind or Bootstrap).
  **Solution**: Created a centralized CSS variables system in `index.css` to manage theme colors globally and utilized `backdrop-filter: blur()` for premium glassmorphism elements.

## Submission Link
GitHub Repository: [https://github.com/harshshrikundawarai-01/harsh.shrikundawar.git](https://github.com/harshshrikundawarai-01/harsh.shrikundawar.git)
