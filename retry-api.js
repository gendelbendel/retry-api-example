'use strict';

const api = require('./lib/api');

api().then(results => console.log(`Results: ${JSON.stringify(results)}`));
