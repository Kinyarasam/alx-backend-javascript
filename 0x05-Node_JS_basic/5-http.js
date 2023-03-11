#!/usr/bin/env node
/**
 * Creates a small http server using the http module
 * @module 5-http
 * @exports app
 */
const http = require('http');

/**
 * Port Number
 * @const {number}
 */
const PORT = 1245;

/**
 * HTTP server
 * @const
 */
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

/**
 * Listen on Port
 * @function
 * @name listen
 * @memberof module:5-http~app
 * @param {number} port - Port number
 * @param {Function} callback - Callback function
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
