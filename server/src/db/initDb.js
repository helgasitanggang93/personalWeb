require('dotenv').config();
const pgtools = require("pgtools");

const { config } = require('./setup');

const createCurriculumDb = () => {
  return new Promise((resolve, reject) => {
    pgtools.createdb(config, process.env.DATABASE_NAME, (err, res) => {
      err ? reject(err) : resolve(res)
    });
  });
};

const dropCurriculumDb = () => {
  return new Promise((resolve, reject) => {
    pgtools.dropdb(config, process.env.DATABASE_NAME, (err, res) => {
      err ? reject(err) : resolve(res)
    });
  });
};

const createDb = async () => {
  try {
    await createCurriculumDb();
    console.log(`Database ${process.env.DATABASE_NAME} created`);
  } catch (error) {
    throw new Error(error);
  }
};

const dropDb = async () => {
  try {
    await dropCurriculumDb();
    console.log(`Database ${process.env.DATABASE_NAME} droped`);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  createDb,
  dropDb
};

require('make-runnable');


