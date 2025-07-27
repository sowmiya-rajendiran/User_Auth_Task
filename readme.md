## Postman Documantation
- https://documenter.getpostman.com/view/45904223/2sB3B7Mt8v

## 🔐 User Authentication & Authorization API
- A RESTful API built with Node.js, Express.js, MongoDB (Mongoose), and JWT to handle user authentication and authorization using Bearer Tokens. The application follows the MVC pattern and includes complete API documentation using Postman.

## ✅ Features
- User registration and login
- JWT-based authentication (Bearer token)
- Protected routes for authenticated users
- Password hashing with bcrypt
- Follows MVC architecture
- API documented using Postman

## 🛠️ Technologies Used
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- Postman

## 🛠️ How It Works
- 🔐 1. User Registration (POST /api/v1/users/register)
    - The user sends name, email, and password.
    - The password is securely hashed using bcryptjs.
    - A new user is created and stored in MongoDB via Mongoose.
- 🔓 2. User Login (POST /api/v1/users/login)
    - The user provides email and password.
    - Credentials are validated:
    - Email exists
    - Password matches the hashed value
    - A JWT token is generated and returned to the client.
- 🔓 3. Token Creation
    - JWT is signed with a secret key (JWT_SECRET).
    - The token contains:
        - userId
- 🔐 4. Protected Routes
    - Routes requiring authentication use middleware to:
    - Read token from Authorization header
    - Authorization: Bearer <token>
    - Verify token using jsonwebtoken.
    - Decode payload and attach user info to req.user.

## Deployed Link
- 