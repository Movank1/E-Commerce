// Sequelize connection to the MySQL database using environment variables

require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;


// // Create a new Sequelize instance
// const sequelize = new Sequelize(process.env.JAWSDB_URL || process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST || 'localhost',
//   dialect: 'mysql',
//   dialectOptions: {
//     decimalNumbers: true
//   }
// });

// // Test the database connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });

// module.exports = sequelize;
