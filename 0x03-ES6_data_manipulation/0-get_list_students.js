#!/usr/bin/env node

/**
 * Returns an array of objects representing a list of students.
 *
 * @returns {Object[]} An array of objects with id, firstName, and location attributes.
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
