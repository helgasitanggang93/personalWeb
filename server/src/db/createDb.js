const pgTools = require('pgtools');

const { config } = require('./setup');

const createDatabase = () => {
    return new Promise((resolve, reject) => {
        pgTools.createdb(config, process.env.DATABASE_NAME, function (err, res) {
            if (err) {
                reject(err)
              console.error(err);
              process.exit(-1);
            }
            resolve(res)
            console.log(res);
          });
    });
};

const dropDatabase = () => {
    return new Promise((resolve, reject) => {
        pgTools.dropdb(config, process.env.DATABASE_NAME, function (err, res) {
            if (err) {
                reject(err)
              console.error(err);
              process.exit(-1);
            }
            resolve(res)
            console.log(res);
          });
    });
};

module.exports = {
    createDatabase,
    dropDatabase
}