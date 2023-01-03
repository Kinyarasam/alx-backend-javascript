#!/usr/bin/env node

/**
 * Returns an array of students for a specific city with their new grades.
 *
 * @param {Object[]} students - The list of students.
 * @param {string} city - The city to filter by.
 * @param {Object[]} newGrades - The new grades for the students.
 * @returns {Object[]} The array of students located in the specified city with their new grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((g) => g.studentId === student.id);
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: grade ? grade.grade : 'N/A',
      };
    });
}
