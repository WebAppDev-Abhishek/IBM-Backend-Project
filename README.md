# 📚 Express Book Reviews API

A simple **book review API** built with **Node.js, Express, and JWT authentication**.  
Users can register, log in, and add/update/delete their reviews for books.  

---

## 🚀 Features

- User registration & login
- JWT-based authentication
- Add, update, and delete book reviews
- Public routes to fetch books by ISBN, author, or title

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/expressBookReviews.git
cd expressBookReviews/final_project
npm install
```

Start the server:

```bash
node index.js
```

The server will run at:

```
http://localhost:5000
```

---

## 🔑 Authentication

- **Register** to create a new user
- **Login** to receive a JWT token
- Pass the token in the `Authorization` header as:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 📌 API Endpoints

### 1️⃣ Public Routes

- **Get all books**
  ```
  GET /books
  ```

- **Get book by ISBN**
  ```
  GET /books/isbn/:isbn
  ```

- **Get books by Author**
  ```
  GET /books/author/:author
  ```

- **Get books by Title**
  ```
  GET /books/title/:title
  ```

---

### 2️⃣ Customer Routes (Protected with JWT)

#### Register
```bash
POST /customer/register
{
  "username": "john",
  "password": "pass123"
}
```

#### Login
```bash
POST /customer/login
{
  "username": "john",
  "password": "pass123"
}
```

Response:
```json
{
  "message": "User logged in successfully",
  "token": "<JWT_TOKEN>"
}
```

#### Add/Update Review
```bash
PUT /customer/auth/review/:isbn?review=Great%20book
Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
```

#### Delete Review
```bash
DELETE /customer/auth/review/:isbn
Headers: { "Authorization": "Bearer <JWT_TOKEN>" }
```

---

## 🛠 Example `curl` Usage

**Register**
```bash
curl -X POST http://localhost:5000/customer/register   -H "Content-Type: application/json"   -d '{"username":"john","password":"pass123"}'
```

**Login**
```bash
curl -X POST http://localhost:5000/customer/login   -H "Content-Type: application/json"   -d '{"username":"john","password":"pass123"}'
```

**Add Review**
```bash
curl -X PUT "http://localhost:5000/customer/auth/review/1?review=Awesome%20book"   -H "Authorization: Bearer <JWT_TOKEN>"
```

**Delete Review**
```bash
curl -X DELETE "http://localhost:5000/customer/auth/review/1"   -H "Authorization: Bearer <JWT_TOKEN>"
```

---

## 📂 Project Structure

```
final_project/
│── index.js
│── package.json
│── router/
│   ├── auth_users.js
│   ├── general.js
│   └── booksdb.js
│── README.md
```

---

## 📖 Notes

- Users are stored **in-memory** (no database).
- JWT tokens expire after **1 hour**.
- You must include a **valid token** for protected routes.

---

## 👨‍💻 Author

Developed as part of the **IBM Full Stack Developer Project**.  

<img width="1141" height="1000" alt="A1vsCode" src="https://github.com/user-attachments/assets/0ece4803-f550-47e8-83a4-aa29768e3dfb" />


