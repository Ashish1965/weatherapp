const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();
require('dotenv').config({ path: '.env.local' });


router.get('/:city', (req, res) => {
  const { city } = req.params;
  const token = req.headers['authorization'].split(' ')[1];
  const user = jwt.verify(token, 'secretkey');

  axios.get(`http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${city}`)
    .then((response) => {
      const weatherInfo = response.data;
      db.query(
        'INSERT INTO searches (user_id, city, weather_info) VALUES (?, ?, ?)',
        [user.id, city, JSON.stringify(weatherInfo)],
        () => res.json(weatherInfo)
      );
    })
    .catch(() => res.status(500).json({ error: 'Failed to fetch weather' }));
});

module.exports = router;
