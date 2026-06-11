# MERN Authentication System

A secure full-stack authentication system built with React, Vite, Tailwind CSS, Node.js, Express, MongoDB, JWT, Google OAuth, Email OTP Verification, and Password Recovery. The application provides modern authentication workflows, secure user management, and protected routes.

## Features

* User Registration
* Email Verification with OTP
* Login with Email
* Login with Username
* Google OAuth Authentication
* JWT Authentication
* Protected Routes
* Forgot Password with OTP
* Reset Password via Email OTP
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

### Backend Setup

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

### Frontend Setup

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

#### Forgot Password

```http
POST /api/auth/forgot-password
```

#### Reset Password

```http
POST /api/auth/reset-password
```

#### Get All Users

```http
GET /api/auth/all
```

## Authentication Flow

### Email Authentication

1. User registers using username, email, and password.
2. System generates a 6-digit OTP.
3. OTP is sent to the user's email address.
4. User verifies the account using the OTP.
5. Email is marked as verified.
6. User can log in using email or username.
7. JWT token is generated upon successful login.
8. Protected routes validate the JWT token.

### Password Recovery Flow

1. User clicks "Forgot Password".
2. User enters their registered email address.
3. System generates a secure 6-digit OTP.
4. OTP is sent to the user's email.
5. User enters the OTP and a new password.
6. Password is securely re-hashed using bcrypt.
7. User logs in with the new password.

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
* Password Recovery via OTP
* OTP Expiration Support
* Protected Routes
* Environment Variables for Secrets
* Google OAuth Authentication
* MongoDB Data Validation

## Future Improvements

* Refresh Tokens
* Resend Verification OTP
* Role-Based Access Control (RBAC)
* User Profile Management
* Multi-Factor Authentication (MFA)
* Account Settings
* Dark Mode

## Author

### Mebtu Melak

Frontend Developer | React Developer | MERN Stack Developer

GitHub:
https://github.com/me-1219

Portfolio:
http://cv.melaklegacy.com.et/
