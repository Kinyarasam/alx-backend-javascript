interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

interface StudentClassConstructorInterface {
  new(firstName: string, lastName: string): StudentClassInterface;
}

/**
 * Teacher object
 * 
 * @type {{ ... }}
 */
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'McD',
  fullTimeEmployee: true,
  location: 'South Africa',
  contract: false,
}

/**
 * Director object
 * 
 * @type {{ ... }}
 */
const director1: Directors = {
  firstName: 'Moses',
  lastName: 'Kuria',
  location: 'Kenya',
  fullTimeEmployee: true,
  numberOfReports: 17
};

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

class StudentClass implements StudentClassInterface {
  firstName: string;;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  WorkOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

function createStudent(
  cStudent: StudentClassConstructorInterface,
  firstName: string,
  lastName: string
): StudentClassInterface {
  return new cStudent(firstName, lastName);
}

const student1 = createStudent(StudentClass, 'John', 'Cena');

console.log(teacher1)
console.log(director1)
console.log(printTeacher('Sam', 'Smith'));
console.log(student1);
