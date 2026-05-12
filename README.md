# Cubenode Lab – Backend API

A simple backend API built with Node.js, Express, PostgreSQL and Docker.  
This project demonstrates a full backend setup including database integration, REST API design, and containerized development.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Docker / Docker Compose
- REST API
- Git & GitHub

---

## 📦 Features

- Create and fetch notes
- PostgreSQL database integration
- Clean API structure using routes
- Dockerized backend + database setup
- Modular code structure (db, routes, server)

---

## 📁 Project Structure
app-backend/
├── index.js # Server entry point
├── db.js # Database connection (PostgreSQL)
├── routes/
│ └── notes.js # API routes
├── Dockerfile
├── package.json
└── README.md

---

## 🔌 API Endpoints

### GET /notes
Returns all notes from the database.

### POST /notes
Creates a new note.

Example request body:

```json
{
  "text": "My first note"
}
docker compose up --build
http://localhost:3000
