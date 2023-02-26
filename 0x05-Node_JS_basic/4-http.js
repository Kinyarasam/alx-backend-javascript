#!/usr/bin/env node
/**
 * Creates a small http server using the http module
 * @module 4-http
 * @exports app
 */
const http = require('http');

/**
 * Port number.
 * @const {number}
 */
const PORT = 1245;

/**
 * HTTP server
 * @const
 */
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

/**
 * Listen on port
 * @function
 * @name listen
 * @memberof module:4-http~app
 * @param {number} port - Port number.
 * @param {Function} callback - Callback function.
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
