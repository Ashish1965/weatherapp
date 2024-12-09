const express = require('express');
const cors = require('cors');
const db = require('./db');
const authRoutes = require('./routes/auth');
const weatherRoutes = require('./routes/weather');
const reportRoutes = require('./routes/report');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/weather', weatherRoutes);
app.use('/report', reportRoutes);

// Start Server
app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
