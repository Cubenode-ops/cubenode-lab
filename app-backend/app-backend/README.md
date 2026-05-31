# 🚀 Cubenode Lab – Backend API

A production-style backend API built with Node.js, Express, PostgreSQL, Docker, and JWT authentication.

This project demonstrates a modern backend architecture including RESTful API development, PostgreSQL integration, JWT-based authentication, protected routes, Dockerized services, and cloud deployment using Render.

---

# 🌍 Live Production Deployment

The backend API is deployed on Render with a managed PostgreSQL cloud database.

## Production Features

- Render Web Service deployment
- Managed PostgreSQL cloud database
- JWT authentication system
- Protected API routes
- Dynamic cloud PORT handling
- Environment variable configuration
- GitHub-based CI/CD deployment workflow
- Remote database schema initialization
- Production debugging & deployment recovery

---

# 🚀 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Docker / Docker Compose
- JWT Authentication
- bcrypt Password Hashing
- REST API
- Render Cloud Deployment
- Git & GitHub

---

# 📦 Features

- Full CRUD API for notes
- PostgreSQL database integration
- JWT authentication system
- Protected API routes
- User registration & login
- Password hashing with bcrypt
- Dockerized backend services
- Modular backend architecture
- RESTful API design
- Environment variable configuration
- Cloud database integration
- Production deployment on Render
- Error handling and validation

---

# 🏗️ Architecture

```text
Client (curl / Postman)
        ↓
Express API (Node.js)
        ↓
Authentication Middleware (JWT)
        ↓
Routes Layer (notes.js / auth.js)
        ↓
Database Layer (pg Pool)
        ↓
PostgreSQL Database
        ↓
Render Cloud Infrastructure
```

---

# 📁 Project Structure

```text
app-backend/
├── index.js              # Server entry point
├── db.js                 # PostgreSQL connection pool
├── routes/
│   ├── notes.js          # CRUD API routes
│   └── auth.js           # Authentication routes
├── Dockerfile
├── package.json
├── package-lock.json
├── .env.example
└── README.md
```

---

# 🔐 Environment Variables

Example `.env` configuration:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=cubenode
JWT_SECRET=supersecret
PORT=3000
```

---

# ☁️ Cloud Database Setup

Production database hosted on Render PostgreSQL.

Example schema initialization:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
```

---

# 🔌 API Endpoints

## 📖 Get All Notes

```http
GET /notes
```

### Response

```json
[
  {
    "id": 1,
    "text": "example note"
  }
]
```

---

## ➕ Create Note

```http
POST /notes
```

### Body

```json
{
  "text": "My new note"
}
```

---

## ✏️ Update Note

```http
PUT /notes/:id
```

### Body

```json
{
  "text": "Updated note"
}
```

---

## ❌ Delete Note

```http
DELETE /notes/:id
```

---

# 🔐 Authentication Endpoints

## 👤 Register User

```http
POST /auth/register
```

### Body

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

### Response

```json
{
  "message": "User created"
}
```

---

## 🔑 Login User

```http
POST /auth/login
```

### Body

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

### Response

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

# 🛡️ Protected Route Example

```http
GET /protected
```

### Header

```text
Authorization: Bearer JWT_TOKEN
```

### Response

```json
{
  "message": "You are authorized"
}
```

---

# 🐳 Run Locally with Docker

## Start Containers

```bash
docker compose up --build
```

---

## API Available At

```text
http://localhost:3000
```

---

# ☁️ Production Deployment (Render)

## Deploy Backend

1. Push project to GitHub
2. Create Render Web Service
3. Connect GitHub repository
4. Configure environment variables
5. Deploy application

---

## Required Environment Variables

```text
JWT_SECRET
DATABASE_URL
PORT
```

---

# 🧪 Example Usage

## Get Notes

```bash
curl http://localhost:3000/notes
```

---

## Register User

```bash
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{"email":"test@test.com","password":"123456"}'
```

---

## Login User

```bash
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"test@test.com","password":"123456"}'
```

---

## Access Protected Route

```bash
curl http://localhost:3000/protected \
-H "Authorization: Bearer JWT_TOKEN"
```

---

# 🎯 What I Learned

- Building REST APIs with Express.js
- Working with PostgreSQL in Node.js
- Implementing JWT authentication
- Protecting API routes with middleware
- Password hashing using bcrypt
- Dockerizing backend systems
- Managing multi-container environments
- Connecting cloud-hosted PostgreSQL databases
- Deploying Node.js applications on Render
- Managing environment variables securely
- Debugging real production deployment issues
- Understanding Docker image vs container lifecycle
- Implementing cloud-ready backend architecture
- Managing remote database schemas
- Working with CI/CD deployment workflows

---

# 🚀 Future Improvements

- Frontend authentication UI
- Role-based access control
- Refresh token implementation
- Kubernetes deployment
- API rate limiting
- Automated database migrations
- Monitoring & logging
- Unit and integration testing








