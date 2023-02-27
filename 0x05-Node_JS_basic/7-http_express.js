#!/usr/bin/env node
/**
 * Creates a small express server using the express module
 * @module 7-http_express
 * @exports app
 */
const express = require('express');
const countStudents = require('./3-read_file_async');

/**
 * Port number
 * @const {number}
 */
const PORT = 1245;

/**
 * Database file
 * @const
 */
const DATABASE = process.argv[2]
/**
 * Express server
 * @const
 */
const app = express();

/**
 * Route that returns 'Hello Holberton School!'
 * @name get/
 * @function
 * @memberof module:7-http_express~app
 * @inner
 * @param {object} req - Express request Object.
 * @param {object} res - Express response Object.
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Route that returns 'This is the list of our students'\
 * followed with the same content as the file '3-read_file_async.js'
 * @name get/
 * @function
 * @memberof module:7-http_express~app
 * @inner
 * @param {Object} req - Express request module
 * @param {Object} res - Express response module.
 */
app.get('/students', async (req, res) => {

  console.log(`[200] /students ...`);
  // res.send('Hello');
  countStudents(DATABASE)
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  })
});

/**
 * Listen on Port
 * @function
 * @name listen
 * @memberof module:7-http_express~app
 * @param {number} port - Port number.
 * @param {function} callback - Callback function
 */
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = app;
