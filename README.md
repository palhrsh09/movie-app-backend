# 🎬 Media Manager Backend

This is the backend of the Media Manager App. It provides a RESTful API to manage a media catalog including Movies and TV Shows. Built with **Node.js**, **Express.js**, **Sequelize ORM**, and **MySQL**, and structured using **MVC architecture**.

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **Sequelize** (ORM)
- **MySQL**
- **dotenv** for environment variables
- **cors** and **body-parser**

---

## 🗂 Project Structure

backend/
├── config/
│ └── database.js # Sequelize DB connection
├── models/
│ └── Media.js # Media model definition
├── controllers/
│ └── mediaController.js # Business logic for API
├── routes/
│ └── mediaRoutes.js # API route definitions
├── app.js # Express app setup
├── server.js # App entry point
└── .env # Environment variables

yaml
Copy
Edit

---

## 🧬 Media Model

The `Media` table has the following fields:

```js
id:        INTEGER (Primary Key, Auto Increment)
title:     STRING (Required)
type:      ENUM('Movie', 'TV Show') (Required)
director:  STRING (Required)
budget:    STRING (Required)
location:  STRING (Required)
duration:  STRING (Required)
year:      STRING (Required)
Defined in: models/Media.js

| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| GET    | `/api/media?page=1` | Get paginated media   |
| POST   | `/api/media`        | Create new media      |
| PUT    | `/api/media/:id`    | Update existing media |
| DELETE | `/api/media/:id`    | Delete media by ID    |
