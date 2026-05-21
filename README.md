# 🚀 Cubenode Lab – Backend API

A containerized backend API built with Node.js, Express, PostgreSQL, Docker, and JWT authentication.

This project demonstrates a production-style backend architecture including database integration, RESTful API design, authentication with JSON Web Tokens (JWT), protected routes, and Dockerized service deployment.

---

# 🚀 Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Docker / Docker Compose
* JWT Authentication
* REST API
* Git & GitHub

---

# 📦 Features

* Full CRUD API for notes
* PostgreSQL database integration
* JWT-based authentication system
* Protected API routes
* User registration & login
* Dockerized backend and database services
* Modular backend structure
* RESTful API design
* Error handling and validation

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
PostgreSQL (Docker Container)
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
└── README.md
```

---

# 🔌 API Endpoints

## 📖 Get all notes

```http
GET /notes
```

Response:

```json
[
  {
    "id": 1,
    "text": "example note"
  }
]
```

---

## ➕ Create note

```http
POST /notes
```

Body:

```json
{
  "text": "My new note"
}
```

---

## ✏️ Update note

```http
PUT /notes/:id
```

Body:

```json
{
  "text": "Updated note"
}
```

---

## ❌ Delete note

```http
DELETE /notes/:id
```

---

# 🔐 Authentication Endpoints

## 👤 Register User

```http
POST /auth/register
```

Body:

```json
{
  "email": "test@test.com",
  "password": "123456"
}
```

---

## 🔑 Login User

```http
POST /auth/login
```

Response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

## 🛡️ Protected Route Example

```http
GET /protected
```

Header:

```text
Authorization: Bearer JWT_TOKEN
```

---

# 🐳 Run the Project

```bash
docker compose up --build
```

API available at:

```text
http://localhost:3000
```

---

# 🧪 Example Usage

```bash
curl http://localhost:3000/notes
```

```bash
curl -X POST http://localhost:3000/auth/register \
-H "Content-Type: application/json" \
-d '{"email":"test@test.com","password":"123456"}'
```

```bash
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"test@test.com","password":"123456"}'
```

---

# 🎯 What I Learned

* Building REST APIs with Express.js
* Working with PostgreSQL in Node.js
* Implementing JWT authentication
* Protecting API routes with middleware
* Dockerizing backend systems
* Managing multi-container environments
* Debugging real backend and deployment issues
* Designing modular backend architecture
* Understanding Docker image vs container lifecycle













