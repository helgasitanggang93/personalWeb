require('dotenv').config();
const { Pool } = require('pg');

const config = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT
};

const configWithDbName = {
    ...config,
    database: process.env.DATABASE_NAME
};
const pool = new Pool(configWithDbName);

module.exports = {
    config,
    pool
};