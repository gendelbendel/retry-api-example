'use strict';

const express = require('express');

const status = require('./routes/status');

const app = express();

// Prefix all of our status api routes with '/api'
app.use('/api', status);

module.exports = app;
