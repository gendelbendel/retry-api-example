'use strict'

const express = require('express');

const handlers = require('../handlers');

const status = express.Router();

status.get('/status', (request, response) => {
  const statusRes = handlers.getStatus();
  console.log(`/status statusCode ${response.statusCode} with body: ${JSON.stringify(statusRes)}`)
  response.send(statusRes);
});

module.exports = status;
