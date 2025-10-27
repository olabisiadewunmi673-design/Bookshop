# Complete Setup Guide

## 1. Frontend Setup

### Initial Setup
```bash
# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env and set your API URL
# VITE_API_URL=http://localhost:3000
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages
1. Commit and push to GitHub
2. In GitHub repository settings, go to Pages
3. Select source: GitHub Actions or Branch
4. Point to `dist` folder
5. Access your app at: `https://yourusername.github.io/your-repo-name`

## 2. Backend Setup

### Initial Setup
```bash
cd backend
npm install

# Create environment file
cp env.example .env

# Edit .env with your MongoDB Atlas connection
```

### MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get connection string
4. Add it to backend/.env as MONGODB_URI

### Seed Database
```bash
# Set your MongoDB URI in .env first
node data/seed.js
```

### Run Server
```bash
# Development (with nodemon if installed)
npm run dev

# Production
npm start
```

### Deploy to Render.com
1. Push backend code to GitHub
2. Go to [Render.com](https://render.com)
3. Create New Web Service
4. Connect GitHub repository
5. Set environment variables:
   - PORT: 3000
   - MONGODB_URI: your connection string
   - DB_NAME: learning_hub
6. Deploy

### Deploy to AWS
1. Use AWS Elastic Beanstalk or EC2
2. Set environment variables
3. Deploy your Express app

## 3. Connect Frontend to Backend

Update the frontend `.env` file:
```
VITE_API_URL=https://your-backend-url.onrender.com
```

Or for local development:
```
VITE_API_URL=http://localhost:3000
```

## 4. MongoDB Collections Export

### Using MongoDB Compass
1. Connect to your cluster
2. Open the database
3. Right-click on `lessons` collection
4. Select "Export Collection"
5. Repeat for `orders` collection

### Required Files for Submission
- lessons.json
- orders.json

## 5. Postman Collection

The collection is already included:
- `backend/postman_collection.json`

To test:
1. Import into Postman
2. Update URLs if different from localhost:3000
3. Test all endpoints

## 6. Testing Checklist

### Frontend Tests
- [ ] Can view all lessons
- [ ] Can search lessons
- [ ] Can sort by different fields
- [ ] Can add lessons to cart
- [ ] Can view cart
- [ ] Can remove from cart
- [ ] Can checkout with valid name and phone
- [ ] Checkout validation works

### Backend Tests
- [ ] GET /lessons returns all lessons
- [ ] GET /search returns filtered results
- [ ] POST /orders creates an order
- [ ] PUT /lessons/:id updates lesson
- [ ] Logger middleware logs requests
- [ ] Static file middleware works

## 7. Submission Checklist

Before creating the zip file:

**Frontend (Vue.js App):**
- [ ] Remove `node_modules` folder
- [ ] Include all source files
- [ ] Include `package.json`
- [ ] Include `.env` or `env.example`

**Backend (Express.js App):**
- [ ] Remove `node_modules` folder
- [ ] Include all source files
- [ ] Include `package.json`
- [ ] Include `env.example`
- [ ] Include `postman_collection.json`

**Documentation:**
- [ ] Updated README.md with GitHub links
- [ ] Updated README.md with GitHub Pages link
- [ ] Updated README.md with backend deployment link

**MongoDB Exports:**
- [ ] lessons.json
- [ ] orders.json

**Postman Collection:**
- [ ] postman_collection.json

## 8. GitHub Repository Links

Update these in your README.md:

### Vue.js App Repository
```
https://github.com/yourusername/learning-hub-frontend
```

### Vue.js App GitHub Pages
```
https://yourusername.github.io/learning-hub-frontend
```

### Express.js App Repository
```
https://github.com/yourusername/learning-hub-backend
```

### Backend Deployment (Render.com or AWS)
```
https://your-backend-url.onrender.com
```

## 9. Important Notes

1. **No Libraries**: Do NOT use Axios, Mongoose, or any other libraries
2. **Fetch API Only**: Use native fetch() for all HTTP requests
3. **Native MongoDB Driver**: Use mongodb package only
4. **Deployment**: Backend must be on Render.com or AWS, NOT on S3 or EC2 with other solutions
5. **File Size**: Keep zip file under 10MB (exclude node_modules)

## 10. Zip File Structure

```
your-submission.zip
├── vue-app/
│   ├── index.html
│   ├── App.vue
│   ├── main.js
│   ├── style.css
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
├── express-app/
│   ├── server.js
│   ├── package.json
│   ├── data/
│   ├── postman_collection.json
│   └── README.md
├── lessons.json
├── orders.json
├── postman_collection.json
└── README.md (main project README)
```

## Need Help?

- Check PROJECT_SUMMARY.md for completed features
- Read README.md for general information
- Review backend/README.md for API details

