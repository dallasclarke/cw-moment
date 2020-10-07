const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const logger = require('./middlewares/logger');
const timer = require('./middlewares/timer');

// app.use(express.static(path.join(__dirname, 'public')));

// app.use(logger); // Needed for Middleware
app.use(timer);

let users = [
    { id: '1', name: 'jd', email: 'jd@me.com', password: '123' },
    { id: '2', name: 'paul', email: 'paul@me.com', password: '123' },
    { id: '3', name: 'lois', email: 'lois@me.com', password: '123' },
    { id: '4', name: 'sidney', email: 'sidney@me.com', password: '123' },
    { id: '5', name: 'canton', email: 'canton@me.com', password: '123' },
  ];

app.get('/', (req, res) => {
    res.status(200).json({confirmation: 'success', users});
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
