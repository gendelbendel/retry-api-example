'use strict';

const request = require('request-promise');
const { propEq } = require('ramda');
const retryPromise = require('./retryPromise');

function myApiCall() {
  const opts = {
    uri: 'http://localhost:3000/status',
    json: true
  };
  return request(opts);
}

const statusCompleted = propEq('status', 'completed');

function retryMyApi() {
  return retryPromise(myApiCall, [statusCompleted], 10);
}

module.exports = retryMyApi;
