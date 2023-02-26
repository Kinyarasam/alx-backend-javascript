#!/usr/bin/env node
const express = require('express');

/**
 * Port number.
 * @const {number}
 */
const PORT = 1245;

/**
 * Express app.
 * @const
 */
const app = express();

/**
 * Route that returns "Hello Holberton School!" in the page body.
 * @name get/
 * @function
 * @memberof module:6-http_express~app
 * @inner
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Listen on port.
 * @name listen
 * @memberof module:6-http_express~app
 * @param {number} port - Port number.
 * @param {Function} callback - Callback function.
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
