
# Static Build Instructions

To generate a static version of this website, follow these steps:

1. Make sure you have Node.js installed (version 16 or higher recommended)

2. Install project dependencies:
   ```
   npm install
   ```

3. Build the project for production:
   ```
   npm run build
   ```

4. The static files will be generated in the `dist` folder. You can deploy these files to any static file hosting service like:
   - GitHub Pages
   - Netlify
   - Vercel
   - Amazon S3
   - Firebase Hosting

## Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Build the project: `npm run build`
3. Initialize git in the dist folder:
   ```
   cd dist
   git init
   git add .
   git commit -m "Deploy"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
4. Enable GitHub Pages in your repository settings, selecting the main branch

## Deploying to Netlify/Vercel

1. Create an account on Netlify or Vercel
2. Connect your GitHub repository
3. Set the build command to: `npm run build`
4. Set the publish directory to: `dist`

These platforms will automatically build and deploy your site when you push changes to your repository.
