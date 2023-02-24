#!/usr/bin/env node
const fs = require('fs');

/**
 * Counts the number of students in a CSV file and organizes them by their class.
 *
 * @param {string} path - The path of the CSV file to read.
 * @returns {Promise} A Promise that resolves once the data is read and processed.
 * @throws {Error} If the file cannot be loaded.
 */
const countStudents = (path) => {
  const promise = (res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) rej(Error('Cannot load the database'));
      if (data) {
        let newData = data.toString().split('\n');
        const obj = {}

        newData = newData.slice(1, newData.length -1);
        console.log(`Number of Students: ${newData.length}`);

        newData.forEach((el) => {
          const student = el.split(', ');
          if (!obj[student[3]]) obj[student[3]] = [];
            obj[student[3]].push(student[0]);
        });
        for (const cls in obj) {
          if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
        }
      }
      res();
    });
  };
  return new Promise(promise);
}


module.exports = countStudents;
