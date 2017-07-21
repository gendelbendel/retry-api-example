'use strict';

const Hapi = require('hapi');

const statusHandler = require('./handlers');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/status',
    handler: statusHandler.getStatus
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
