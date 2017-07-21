'use strict';

const {getRandomInt} = require('../../lib/random-number');

function getStatus(request, reply) {
  const response = {
    status: getRandomInt(1,10) > 7 ? "completed" : "incomplete"
  };
  reply(response);
}

module.exports = getStatus;
