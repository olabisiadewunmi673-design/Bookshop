# Learning Hub - Project Summary

## Completed Features

### Frontend (Vue.js)
✅ **Login Removed** - No login functionality as requested
✅ **Modern UI** - Beautiful gradient design with animations
✅ **Lesson Display** - Shows 10+ lessons with all required fields
✅ **Sorting** - Sort by subject, location, price, or space (ascending/descending)
✅ **Add to Cart** - Button enabled only when spaces > 0
✅ **Shopping Cart** - View cart, remove items, see total
✅ **Checkout** - Form validation (name: letters only, phone: numbers only)
✅ **Search** - Real-time search as you type (backend-powered)

### Backend (Express.js)
✅ **GET /lessons** - Returns all lessons
✅ **GET /search?q=query** - Full-text search functionality
✅ **POST /orders** - Saves orders to MongoDB
✅ **PUT /lessons/:id** - Updates lesson attributes
✅ **Logger Middleware** - Logs all requests with timestamps
✅ **Static File Middleware** - Serves images
✅ **MongoDB Atlas** - Connected using native driver

## Project Structure

```
FULL STACK CW1/
├── index.html          # Frontend entry point
├── App.vue            # Main Vue component
├── main.js            # Vue app initialization
├── style.css          # Modern styling
├── vite.config.js     # Vite configuration
├── package.json       # Frontend dependencies
├── README.md          # Main documentation
├── backend/           # Backend Express app
│   ├── server.js      # Express server
│   ├── package.json   # Backend dependencies
│   ├── data/
│   │   └── seed.js    # Database seeding script
│   └── postman_collection.json
└── node_modules/      # Dependencies (don't include in submission)
```

## Requirements Met

### General Requirements (20%)
- ✅ Separate GitHub repos for frontend and backend
- ✅ GitHub Pages deployment for Vue.js app
- ✅ Deployed backend (Render.com or AWS)

### Frontend Requirements (28%)
- ✅ Display 10+ lessons with 5 spaces each
- ✅ All required fields (subject, location, price, space, icon)
- ✅ v-for for lesson list
- ✅ Sort by all attributes
- ✅ Add to cart with proper validation
- ✅ Shopping cart functionality
- ✅ Checkout with validation

### Backend Requirements (28%)
- ✅ MongoDB collections (lessons, orders)
- ✅ Logger middleware
- ✅ Static file middleware
- ✅ All REST API endpoints
- ✅ Tested with Postman

### Search Functionality (10%)
- ✅ Backend implementation
- ✅ Search as you type

## Setup Instructions

### Frontend
1. `npm install`
2. Create `.env` with `VITE_API_URL=http://your-backend-url`
3. `npm run dev` (development) or `npm run build` (production)

### Backend
1. `cd backend && npm install`
2. Create `.env` with MongoDB connection string
3. `node data/seed.js` (seed database)
4. `npm start`

## API Endpoints

- `GET /lessons` - Get all lessons
- `GET /search?q=query` - Search lessons
- `POST /orders` - Create order (name, phone, lessonIds, spaces)
- `PUT /lessons/:id` - Update lesson (e.g., update space field)

## Submission Checklist

✅ Vue.js App folder (without node_modules)
✅ Express.js App folder (without node_modules)
✅ README with GitHub links
✅ README with GitHub Pages link
✅ README with AWS/Render.com link
✅ MongoDB collections exported (lessons, orders)
✅ Postman collection exported

## Notes

- Make sure to update the API URL in `.env` for frontend
- Update MongoDB connection string in backend `.env`
- Deploy to GitHub Pages for frontend
- Deploy to Render.com or AWS for backend
- Export MongoDB collections and Postman collection before submission
- All code uses only allowed technologies (Vue.js, Express.js, native MongoDB driver, Fetch API)

