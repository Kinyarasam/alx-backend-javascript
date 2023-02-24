#!/usr/bin/env node
/**
 * Creates a small http server using the http module
 * @module 5-http
 * @exports app
 */
const http = require('http');
const { exec } = require('child_process');

/**
 * Port Number
 * @const {number}
 */
const PORT = 1245;

/**
 * HTTP server
 * @const
 */
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/students') {
    const cmd = 'const countStudents = require(\'./3-read_file_async\');'
      + `countStudents('${process.argv[2]}')`
      + '.catch((err) => console.error(err.message))';
    exec(`echo "${cmd}" | ${process.execPath}`, (err, stdout, stderr) => {
      if (stdout) {
        const content = stdout.toString().slice(0, -1);
        res.end(`This is the list of our students\n${content}`);
      } else if (stderr) {
        res.statusCode = 404;
        const content = stderr.toString().slice(0, -1);
        res.end(`This is the list of our students\n${content}`);
      } else if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });
  } else {
    const resText = 'Hello Holberton School!';
    res.end(resText);
  }
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
