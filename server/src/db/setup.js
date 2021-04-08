const { Client } = require('pg');

const config = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT
};

const client = new Client(config);

module.exports = {
    config,
    client
};