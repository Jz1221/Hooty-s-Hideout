# Hooty's Hideout

Hooty’s Hideout is a full-stack product management web application inspired by The Owl House (TOH).
Just like Hooty guards the Owl House, this app acts as a hub where users can manage products, interact with the community, and share ideas through comments—all within a fun, themed experience.

The project demonstrates modern full-stack development practices, combining secure authentication, RESTful APIs, and a responsive frontend.

![Hooty](./screenshorts/hooty.png)
<h2 align="center">Figure 1.0 Hooty</h2>

## 🏗️ Project Structure

### Backend (`/backend`)
- **Framework**: Node.js with Express
- **Language**: TypeScript
- **Database**: Drizzle ORM with database schema management
- **Key Features**:
  - User management and authentication
  - Product CRUD operations
  - Comment system
  - RESTful API endpoints

**Main Files**:
- `src/index.ts` - Server entry point
- `src/controllers/` - Route handlers for users, products, and comments
- `src/routes/` - API route definitions
- `src/db/` - Database configuration and queries
- `src/config/` - Environment configuration

### Frontend (`/frontend`)
- **Framework**: React with Vite
- **Build Tool**: Vite
- **Key Features**:
  - User authentication interface
  - Product browsing and management
  - Product creation and editing
  - Comment section for products
  - Theme selection
  - Loading states and responsive UI

**Key Components**:
- `components/` - Reusable React components (ProductCard, CommentsSection, etc.)
- `hooks/` - Custom React hooks for API interactions
- `pages/` - Page components (HomePage, ProductPage, ProfilePage, etc.)
- `lib/` - Utility functions and API configuration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   ```

### Configuration
- Backend: Configure environment variables in `backend/src/config/env.ts`
- Database: Set up your database connection and run migrations with Drizzle

### Running the Application

**Development Mode**:

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm run dev
```

## 📝 Features

- ✅ User Authentication and Profiles
- ✅ Product Management (Create, Read, Update, Delete)
- ✅ Product Comments and Community Engagement
- ✅ Theme Customization
- ✅ Responsive Design
- ✅ Real-time API Integration

## 🛠️ Tech Stack

**Backend**:
- Express.js
- TypeScript
- Drizzle ORM
- Node.js

**Frontend**:
- React
- Vite
- JavaScript (with React hooks)
- ESLint for code quality

## 📂 Directory Overview

```
productify/
├── backend/          # Node.js/Express backend API
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── db/
│   │   └── config/
│   └── package.json
├── frontend/         # React/Vite frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── lib/
│   └── package.json
└── README.md
```

## 📄 License

This project is part of the Hooty's Hideout repository.

---

For more information, visit the repository at [github.com/Jz1221/Hooty-s-Hideout](https://github.com/Jz1221/Hooty-s-Hideout)

## Video Reference
https://youtu.be/y7kvxIQQxtQ?si=0-4CEtR_UxrzaSVT