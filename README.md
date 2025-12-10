# 📘 Quizila — Smart Quiz Challenge App
A full-stack learning platform that challenges users with quizzes across multiple subjects.

---

### 🚀 Overview
Quizila is a complete quiz-based learning system consisting of:

- **Backend (Node.js + Express + SQL + ORM)**

- **Mobile App (React Native + Expo)**

- **Secure Authentication (JWT + bcrypt)**

- **Cloud Deployment (Docker + Railway/Render)**

- **Fully documented API & UML architecture**

This platform allows users to register, browse quizzes, answer questions, track scores, and compete on leaderboards.

---
# 📂 Project Structure
```
quizila/
│
├── backend/           # Node.js + Express REST API
│   ├── src/
│   ├── prisma/orm     # or /sequelize /typeorm
│   ├── migrations/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── README.md
│
├── mobile/            # React Native + Expo mobile app
│   ├── app/
│   ├── components/
│   ├── store/         # Zustand stores
│   └── README.md
│
├── docs/              # UML diagrams, ERD, technical docs
└── README.md          # Main documentation
```

# 🎯 Core Features
## ✔️ Backend (Node.js + Express)

* JWT authentication (access & refresh tokens)
* Secure password hashing (bcrypt)
* Role-based access (Admin/User)
* CRUD for Quizzes
* CRUD for Questions & Answers
* Leaderboard & scoring system
* Validation + global error handling
* API documentation (Swagger/OpenAPI)
## ✔️ Mobile App (React Native + Expo)
* Login & registration
* Browse quizzes
* Play quizzes interactively
* Track score and progress
* Zustand-powered global state
* Secure token storage (SecureStore)
## ✔️ Infrastructure
* SQL database (PostgreSQL recommended)
* ORM: Prisma / Sequelize / TypeORM
* Dockerized backend
* Deployment on Railway or Render
* Technical & architectural documentation
* UML diagrams: Use Case, Class Diagram, ERD, Deployment
## 🛠️ Tech Stack
#### Backend
* Node.js
* Express.js
* PostgreSQL / MySQL
* Prisma / Sequelize / TypeORM
* JSON Web Tokens (JWT)
* bcrypt
* Docker
* Swagger / OpenAPI

#### Mobile
* React Native
* Expo
* Zustand
* Axios
* SecureStore

# 📦 Getting Started
## 1️⃣ Clone the Repository
``` bash
git clone https://github.com/yourusername/quizila.git
cd quizila
``` 
# 🖥️ Backend Setup

## 2️⃣ Install Dependencies
``` bash
cd backend
npm install
``` 

## 3️⃣ Create the ```.env``` file
```ini DATABASE_URL="postgresql://user:password@localhost:5432/quizila"
JWT_SECRET="YOUR_SECRET"
JWT_REFRESH_SECRET="YOUR_REFRESH_SECRET"
PORT=5000
```

## 4️⃣ Run Migrations

(Prisma example)
``` bash
npx prisma migrate dev
```
## 5️⃣ Start the backend
``` bash
npm run dev
``` 

Backend will run on:

http://localhost:5000

# 📱 Mobile App Setup
## 1️⃣ Install Dependencies
``` bash
cd mobile
npm install
```

## 2️⃣ Create ```.env```
```arduino
API_URL=http://localhost:5000
```
## 3️⃣ Run the App
``` bash
npx expo start
```

Scan QR code with Expo Go.

## 🐳 Docker Deployment

Inside ``/backend``:

**Build image**
```bash
docker build -t quizila-backend .
```
**Run**
```bash
docker-compose up -d
```
## 📐 Architecture Documentation

All UML diagrams, schema, and documentation are stored in:
```bash
/docs
```

Includes:
* Use Case Diagram
* Class Diagram
* Deployment Diagram
* ERD (Entity Relationship Diagram)
* Swagger API documentation
* Postman/Insomnia Collection

## 📝 Project Status
This project is currently in the development phase, with backend and mobile features being implemented according to the Jobintech Capstone requirements.

## 🤝 Contributing

Contributions are encouraged!
Guidelines:

* Follow Clean Architecture or MVC structure
* Use meaningful commit messages
* Maintain consistent code formatting
* Write tests where applicable
## 📄 License

MIT License — free to use and modify.

## 🙌 Acknowledgements

Built by **Marouane Akrich** 

Special thanks to **Jobintech** and **Simplon Maghreb** for providing the training.