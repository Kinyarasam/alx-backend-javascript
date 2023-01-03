#!/usr/bin/env node

/**
 * Returns the sum of all student IDs.
 *
 * @param {Object[]} students - The list of all students
 * @returns {number} The sum of all student IDs.
 */
export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }
  return students.reduce((acc, student) => acc + Number(student.id), 0);
}
