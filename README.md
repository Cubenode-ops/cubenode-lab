🚀 Cubenode Lab – Backend API

A containerized REST API built with Node.js, Express, PostgreSQL, and Docker.
This project demonstrates a full backend system including database integration, CRUD operations, and service orchestration using Docker Compose.

🚀 Tech Stack
Node.js
Express.js
PostgreSQL
Docker / Docker Compose
REST API
Git & GitHub
📦 Features
Full CRUD API for notes
PostgreSQL database integration
Dockerized backend and database setup
Clean modular structure (routes, db, server)
RESTful API design
Error handling for all endpoints
🏗️ Architecture
Client (curl / Postman)
        ↓
Express API (Node.js)
        ↓
Routes (notes.js)
        ↓
Database Layer (pg Pool)
        ↓
PostgreSQL (Docker Container)
📁 Project Structure
app-backend/
├── index.js              # Server entry point
├── db.js                 # PostgreSQL connection pool
├── routes/
│   └── notes.js          # CRUD API routes
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
🔌 API Endpoints
📖 Get all notes
GET /notes

Response:

[
  {
    "id": 1,
    "text": "example note"
  }
]
➕ Create note
POST /notes

Body:

{
  "text": "My new note"
}
✏️ Update note
PUT /notes/:id

Body:

{
  "text": "Updated note"
}
❌ Delete note
DELETE /notes/:id
🐳 Run the Project
1. Start with Docker
docker compose up --build
2. API available at
http://localhost:3000
🧪 Example Usage
curl http://localhost:3000/notes
curl -X POST http://localhost:3000/notes \
-H "Content-Type: application/json" \
-d '{"text":"Hello World"}'
🎯 What I Learned
Building REST APIs with Express
Working with PostgreSQL in Node.js
Dockerizing backend systems
Debugging real API issues
Designing CRUD Architecture
