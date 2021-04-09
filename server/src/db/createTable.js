const { pool } = require('./setup');

const createUserTable = async () => {
    try {
        const sql = `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

        CREATE TABLE IF NOT EXISTS users(
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        username CHAR(50) UNIQUE NOT NULL,
        password CHAR(50) NOT NULL,
        attemped_login INTEGER
    );

    CREATE TABLE IF NOT EXISTS personal_informations(
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name TEXT,
        birth_of_date DATE,
        email TEXT,
        linkedIn TEXT,
        github TEXT,
        summary TEXT
    );

    CREATE TABLE IF NOT EXISTS educations(
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        education_name TEXT,
        year_start DATE,
        year_end DATE,
        department TEXT,
        major TEXT,
        thumbnail TEXT,
        summary TEXT,
        
    )`;
        await pool.query(sql);
        console.log('Table users created');
    } catch (error) {
        throw new Error(error);
    }
};

const createPersonalInformation = async () => {
    try {
        const sql = `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    
        CREATE TABLE IF NOT EXISTS personal_informations(
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name TEXT,
            birth_of_date DATE,
            email TEXT,
            linkedIn TEXT,
            github TEXT,
            summary TEXT
        )`;
        await pool.query(sql);
        console.log('Table personal_informations created');
    } catch (error) {
        throw new Error(error);
    }
};

const createEducation = async () => {
    try {
        const sql = `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    
        CREATE TABLE IF NOT EXISTS educations(
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            education_name TEXT,
            year_start DATE,
            year_end DATE,
            department TEXT,
            major TEXT,
            thumbnail TEXT,
            summary TEXT
        )`;
        await pool.query(sql);
        console.log('Table educations created');
    } catch (error) {
        
    }
};

const createTable = async () => {
    await createPersonalInformation();
    await createUserTable();
};

module.exports = {
    createTable
};

require('make-runnable');
