'use strict';

const request = require('request-promise');
const { propEq } = require('ramda');
const retryPromise = require('./retry-promise');

// This is setup to call the api endpoint setup in our server dir
function myApiCall() {
  const opts = {
    uri: 'http://localhost:3000/api/status',
    json: true
  };
  return request(opts);
}

// Our singular predicate: if this is true, we stop retrying
const statusCompleted = propEq('status', 'completed');

function retryMyApi() {
  return retryPromise(myApiCall, [statusCompleted], 10);
}

module.exports = retryMyApi;
