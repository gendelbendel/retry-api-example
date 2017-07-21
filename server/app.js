'use strict';

const express = require('express');

const status = require('./routes/status');

const app = express();

app.use('/api', status);

module.exports = app;
