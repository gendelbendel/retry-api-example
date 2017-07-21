'use strict';

// require on a dir checks for the index.js file
//
// This makes it so that we can specify a bunch of handlers at once
//   without clogging up our routes
const getStatus = require('./get-status');

module.exports = {
  getStatus
};
