'use strict';

const config = require('config');

const app = require('./server/app');

const server = app.listen(config.port, () => {
  const url = server.address();
  if (url.address === '::') {
    url.address = 'localhost';
  }
  console.log(`Server running at http://${url.address}:${config.port}`);
});
