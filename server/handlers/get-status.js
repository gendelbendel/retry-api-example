'use strict';

const getRandomInt = require('../../lib/random-number');

function getStatus(request, reply) {
  return {
    status: getRandomInt(1,10) > 7 ? "completed" : "incomplete"
  };
}

module.exports = getStatus;
