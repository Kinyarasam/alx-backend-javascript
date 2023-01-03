#!/usr/bin/env node

/**
 * Returns an array of student IDs from a list of objects.
 *
 * @param {Object[]} students - The list of students.
 * @returns {string[]} The array of student IDs.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
