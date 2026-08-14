# 🚀 Hackathon Project

A modern full-stack web application developed as a hackathon project using **React.js, Vite, Tailwind CSS, and Node.js**.

## 📌 Overview

This project is designed to provide users with a simple, modern, and responsive web experience.

The application consists of:

* 🏠 Modern Home Page
* 🔐 User Login
* 📝 User Signup
* 🗺️ Map Integration
* ⚡ Fast React + Vite frontend
* 🎨 Modern Tailwind CSS UI
* 🔧 Backend API integration

---

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST API

### Tools

* Git
* GitHub
* Visual Studio Code

---

## 📂 Project Structure

```text
Hackathon/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── Signp.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── Map.jsx
│   │   └── route.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── ...
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Hackathon.git
```

### 2. Navigate to the project

```bash
cd Hackathon
```

---

## 💻 Frontend Setup

Go to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## 🔧 Backend Setup

Open another terminal and navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
```

Add your required environment variables to `.env`.

Then start the backend:

```bash
npm run dev
```

---

## 🔐 Environment Variables

Do **not** upload your `.env` file to GitHub.

Example:

```env
PORT=5000
DATABASE_URL=your_database_url
API_KEY=your_api_key
```

Make sure `.env` is included in `.gitignore`:

```gitignore
node_modules/
.env
.env.*
dist/
```

---

## 🧭 Available Routes

| Route     | Page   |
| --------- | ------ |
| `/`       | Home   |
| `/login`  | Login  |
| `/signup` | Signup |

---

## ✨ Features

### 🔐 Authentication

Users can:

* Create an account
* Log in
* Navigate between login and signup pages
* Enter their account information securely

### 🎨 Modern UI

The frontend uses:

* Responsive design
* Tailwind CSS
* Modern cards
* Gradient effects
* Responsive forms
* Interactive buttons

### 🗺️ Map

The project includes map functionality through `Map.jsx`.

---

## 🚀 Future Improvements

Some planned improvements include:

* [ ] Complete user authentication
* [ ] Connect frontend with backend API
* [ ] Database integration
* [ ] Google authentication
* [ ] Improved map functionality
* [ ] User dashboard
* [ ] Profile management
* [ ] Mobile optimization
* [ ] Deployment

---

## 👨‍💻 Developer

**Aniket Prabhakar**

B.Tech – Computer Science & Engineering

Academic Year: **2024–2028**

---

## 📜 License

This project was developed for educational and hackathon purposes.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
