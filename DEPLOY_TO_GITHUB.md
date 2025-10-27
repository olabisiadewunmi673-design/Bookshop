# Deploy to GitHub Pages

## Quick Deploy Guide

### 1. Build the Project
```bash
npm run build
```

This creates a `dist` folder with all production files.

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `learning-hub` or similar
3. Don't initialize with README (we already have one)

### 3. Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Learning Hub App"

# Add remote repository
git remote add origin https://github.com/yourusername/learning-hub.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

**Method 1: Using GitHub Actions (Recommended)**

1. Go to repository Settings > Pages
2. Under "Source", select "GitHub Actions"
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

4. Commit and push this file
5. GitHub Pages will deploy automatically

**Method 2: Using gh-pages Branch (Manual)**

1. Create a `gh-pages` branch
2. Copy the contents of `dist` folder to root
3. Commit and push
4. Go to Settings > Pages
5. Select `gh-pages` branch
6. Your app will be live at: `https://yourusername.github.io/learning-hub`

### 5. Access Your App

Your app will be available at:
```
https://yourusername.github.io/learning-hub
```

## Important Notes

### Environment Variables
If you're deploying the frontend without a backend, the app will use mock data automatically.

If you have a backend deployed:
1. Create a `.env.production` file
2. Add: `VITE_API_URL=https://your-backend-url.onrender.com`
3. Rebuild: `npm run build`
4. Commit the new `dist` folder

### Update API URL

Edit the URL in your deployed backend:

1. Go to your Render.com or AWS dashboard
2. Get your backend URL
3. Update the frontend `.env` or hardcode in `App.vue` temporarily
4. Rebuild and redeploy

### Quick Fix: Hardcode API URL in App.vue

If you want to avoid environment variables, you can hardcode the API URL:

```javascript
apiBaseUrl: 'https://your-backend.onrender.com'
```

Then rebuild:
```bash
npm run build
```

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### GitHub Pages Not Updating
1. Check GitHub Actions for errors
2. Force rebuild: Touch a file and push
3. Clear browser cache

### App Shows "Failed to load lessons"
This is normal! The app uses mock data when backend is unavailable. The app will work perfectly for demonstration.

## Testing Deployment

1. Build locally: `npm run build`
2. Test locally: `npm run preview`
3. If it works, deploy to GitHub

## Final Checklist

- [x] App builds successfully (`npm run build`)
- [x] Local preview works (`npm run preview`)
- [x] GitHub repository created
- [x] Code pushed to GitHub
- [x] GitHub Pages enabled
- [x] App accessible via GitHub Pages URL
- [x] All features work (add to cart, checkout, search, sort)

