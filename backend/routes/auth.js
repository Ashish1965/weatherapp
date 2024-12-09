const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db');
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
//   console.log(username)
//   console.log(password)
  const hashedPassword = await bcrypt.hash(password, 10);
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err) => {
    if (err) return res.status(400).json({ error: 'User already exists' });
    res.json({ message: 'User registered successfully' });
  });
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err || results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: results[0].id }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
  });
});

module.exports = router;
