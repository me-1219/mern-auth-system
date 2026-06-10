# MERN Authentication System

A secure full-stack authentication system built with React, Vite, Tailwind CSS, Node.js, Express, MongoDB, JWT, Google OAuth, and Email OTP Verification. The application provides modern authentication workflows, secure user management, and protected routes.

## Features

* User Registration
* Email Verification with OTP
* Login with Email
* Login with Username
* Google OAuth Authentication
* JWT Authentication
* Protected Routes
* Secure Password Hashing with bcrypt
* User Dashboard
* Logout Functionality
* MongoDB Atlas Integration
* Responsive Tailwind CSS UI
* Toast Notifications
* Form Validation

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hot Toast
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* Passport.js
* Google OAuth 2.0
* Nodemailer
* bcryptjs
* dotenv

## Project Structure

### Backend

```text
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── server.js
└── .env
```

### Frontend

```text
frontend/
├── src/
│   ├── pages/
│   ├── services/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
└── vite.config.js
```

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/mern-auth-system.git
cd mern-auth-system
```

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

Start the backend server:

```bash
npm run dev
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5000
```

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Verify Email OTP

```http
POST /api/auth/verify-email
```

#### Login User

```http
POST /api/auth/login
```

#### Google Login

```http
GET /api/auth/google
```

## Authentication Flow

### Email Authentication

1. User registers using username, email, and password.
2. System generates a 6-digit OTP.
3. OTP is sent to the user's email address.
4. User enters the verification code.
5. Email is verified successfully.
6. User can log in using email or username.
7. JWT token is generated upon successful login.
8. Protected routes validate the JWT token.

### Google Authentication

1. User selects "Continue with Google".
2. Google OAuth authentication is completed.
3. User account is created automatically if it does not exist.
4. User is marked as verified.
5. JWT token is generated.
6. User is redirected to the dashboard.

## Security Features

* Password Hashing with bcrypt
* JWT Authentication
* Email Verification
* OTP Expiration Support
* Protected Routes
* Environment Variables for Secrets
* Google OAuth Authentication
* MongoDB Data Validation

## Future Improvements

* Refresh Tokens
* Forgot Password
* Password Reset via Email
* Role-Based Access Control (RBAC)
* User Profile Management
* Multi-Factor Authentication (MFA)
* Dark Mode
* Account Settings

## Author

### Mebtu Melak

Frontend Developer | React Developer | MERN Stack Developer

GitHub:
https://github.com/me-1219

Portfolio:
http://cv.melaklegacy.com.et/
