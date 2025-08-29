const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
const axios = require("axios");

// Task 1: Get all books
public_users.get('/', function (req, res) {
  return res.status(200).send(JSON.stringify(books, null, 2));
});

// Task 2: Get book by ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  return res.status(200).json(books[isbn]);
});

// Task 3: Get books by author
public_users.get('/author/:author', function (req, res) {
  let author = req.params.author;
  let filtered = Object.values(books).filter(book => book.author === author);
  return res.status(200).json(filtered);
});

// Task 4: Get books by title
public_users.get('/title/:title', function (req, res) {
  let title = req.params.title;
  let filtered = Object.values(books).filter(book => book.title === title);
  return res.status(200).json(filtered);
});

// Task 5: Get reviews by ISBN
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  return res.status(200).json(books[isbn].reviews);
});

// Task 6: Register user
public_users.post("/register", (req,res) => {
  const {username, password} = req.body;
  if (username && password) {
    if (!isValid(username)) {
      users.push({"username":username,"password":password});
      return res.status(200).json({message: "User registered successfully"});
    } else {
      return res.status(400).json({message: "User already exists"});
    }
  }
  return res.status(400).json({message: "Username and password required"});
});


// ---------------- PROMISES / ASYNC-AWAIT (Tasks 10–13) ----------------

// Task 10: Get all books (async/await)
public_users.get('/async/books', async (req,res) => {
  try {
    let result = await axios.get('http://localhost:5000/');
    return res.status(200).json(result.data);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
});

// Task 11: Get book by ISBN (async/await)
public_users.get('/async/isbn/:isbn', async (req,res) => {
  try {
    let result = await axios.get(`http://localhost:5000/isbn/${req.params.isbn}`);
    return res.status(200).json(result.data);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
});

// Task 12: Get books by author (async/await)
public_users.get('/async/author/:author', async (req,res) => {
  try {
    let result = await axios.get(`http://localhost:5000/author/${req.params.author}`);
    return res.status(200).json(result.data);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
});

// Task 13: Get books by title (async/await)
public_users.get('/async/title/:title', async (req,res) => {
  try {
    let result = await axios.get(`http://localhost:5000/title/${req.params.title}`);
    return res.status(200).json(result.data);
  } catch (err) {
    return res.status(500).json({message: err.message});
  }
});

module.exports.general = public_users;
