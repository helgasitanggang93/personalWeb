const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DATABAE_USER,
    password: process.env.DATABAE_PASSWORD,
    host: process.env.DATABAE_HOST,
    port: process.env.DATABASE_PORT
});

module.exports = pool;