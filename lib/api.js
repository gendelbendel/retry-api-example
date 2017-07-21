'use strict';

const request = require('request-promise');
const { propEq } = require('ramda');
const retryPromise = require('./retry-promise');

function myApiCall() {
  const opts = {
    uri: 'http://localhost:3000/api/status',
    json: true
  };
  return request(opts);
}

const statusCompleted = propEq('status', 'completed');

function retryMyApi() {
  return retryPromise(myApiCall, [statusCompleted], 10);
}

module.exports = retryMyApi;
