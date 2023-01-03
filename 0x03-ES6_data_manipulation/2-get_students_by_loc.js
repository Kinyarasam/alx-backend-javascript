#!/usr/bin/env node

/**
 * Returns an array of students located in a specific location.
 *
 * @param {Object[]} students - The list of students.
 * @param {string} location - The location to filter by.
 * @returns {Object[]} The array of students located in the specified location.
 */
export default function getStudentsByLocation(students, location) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === location);
}
