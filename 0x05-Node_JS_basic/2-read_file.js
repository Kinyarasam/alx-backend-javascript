#!/usr/bin/env node

const fs = require('fs');

/**
 * Reads student data from a file and outputs the number of students and the number
 * of students in each class along with their names.
 *
 * @param {string} path - The path to the file containing student data.
 * @throws {Error} If the file cannot be loaded.
 */
function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf8').toString().split('\n');
    const obj = {};

    data = data.slice(1, data.length - 1);
    console.log(`Number of students: ${data.length}`);

    data.forEach((el) => {
      const student = el.split(',');

      if (!obj[student[3]]) obj[student[3]] = [];
      obj[student[3]].push(student[0]);
    });

    for (const cls in obj) {
      if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
