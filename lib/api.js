'use strict';

const request = require('request-promise');
const { propEq } = require('ramda');
const config = require('config');

const retryPromise = require('./retry-promise');

// This is setup to call the api endpoint setup in our server dir
function myApiCall() {
  const opts = {
    uri: `http://${config.host}:${config.port}/api/status`,
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
