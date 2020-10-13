const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const logger = require('./middlewares/logger');
const timer = require('./middlewares/timer');
const userRoutes = require('./routes/userRoutes');
const port = process.env.PORT || 3000;

// General middleware and gives us the info in the terminal
app.use(morgan('dev'));

// Needed to post Data.
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes middleware
app.use('/api/v1/users', userRoutes);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

