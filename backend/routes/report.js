const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
  db.query(`
    SELECT users.username, searches.city, searches.weather_info 
    FROM searches 
    JOIN users ON searches.user_id = users.id
  `, (err, results) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch report' });
    res.json(results);
  });
});

module.exports = router;
