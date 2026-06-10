# MERN Authentication System

A secure full-stack authentication application built using React, Vite, Tailwind CSS, Node.js, Express, MongoDB, JWT, and Google OAuth.

## Features

* User Registration
* Login with Email
* Login with Username
* Google OAuth Authentication
* JWT Authentication
* Protected Dashboard
* Logout Functionality
* MongoDB Database Integration
* Responsive Tailwind CSS UI

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* Passport.js
* Google OAuth 2.0
* bcryptjs

## Project Structure

backend/

* config/
* controllers/
* middleware/
* models/
* routes/
* server.js

frontend/

* src/
* pages/
* services/
* App.jsx
* main.jsx

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/mern-auth-system.git
```

### Backend Setup

```bash
cd backend
npm install
```

Create a .env file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Start Backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

Backend runs on:

```txt
http://localhost:5000
```

## API Endpoints

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

### Google Login

```http
GET /api/auth/google
```

## Authentication Flow

1. User registers using username, email, and password.
2. User logs in with either email or username.
3. Passwords are securely hashed using bcrypt.
4. JWT token is generated upon successful login.
5. Protected routes verify JWT authentication.
6. Google OAuth users can sign in using their Google account.

## Future Improvements

* Refresh Tokens
* Email Verification
* Forgot Password
* Role-Based Access Control
* User Profile Management
* Account Settings
* Dark Mode

## Author

Mebtu Melak

Frontend Developer | React Developer | MERN Stack Developer

GitHub:
https://github.com/me-1219
