# Career advisor website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/ruasthon-1560s-projects/v0-career-advisor-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/7DiXAqx7wY5)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/ruasthon-1560s-projects/v0-career-advisor-website](https://vercel.com/ruasthon-1560s-projects/v0-career-advisor-website)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/7DiXAqx7wY5](https://v0.app/chat/projects/7DiXAqx7wY5)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

# Career Advisor Website

This repository contains the source code for the Career Advisor Website. The project is configured to be deployed using GitHub Pages.

## Deployment on GitHub Pages

To deploy this project on GitHub Pages, follow these steps:

1. **Build the Project**:
   Ensure you have Node.js installed. Run the following commands to install dependencies and build the project:
   ```bash
   npm install
   npm run build
   npm run export
   ```
   This will generate a `out/` folder containing the static files for deployment.

2. **Push to GitHub Pages**:
   - Move the contents of the `out/` folder to the `gh-pages` branch or configure GitHub Pages to use the `out/` folder in the `main` branch.
   - Commit and push the changes:
     ```bash
     git add .
     git commit -m "Deploy to GitHub Pages"
     git push origin gh-pages
     ```

3. **Configure GitHub Pages**:
   - Go to your repository settings on GitHub.
   - Under the "Pages" section, set the source to the `gh-pages` branch or the `out/` folder in the `main` branch.

## Notes

- This project was initially configured for deployment on Vercel. To avoid interference, ensure that the Vercel configuration is removed or ignored if deploying on GitHub Pages.
- For more details on exporting a Next.js project, refer to the [Next.js documentation](https://nextjs.org/docs/advanced-features/static-html-export).
