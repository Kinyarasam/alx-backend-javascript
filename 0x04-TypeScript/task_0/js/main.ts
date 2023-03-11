interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

/**
 * Student object 1
 *
 * @type {{ firstName: string, lastName: string, age: number, location: string }}
 */
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Scotland',
}

/**
 * Student object 1
 *
 * @type {{ firstName: string, lastName: string, age: number, location: string }}
 */
const student2: Student = {
  firstName: 'Jack',
  lastName: 'Bouer',
  age: 45,
  location: 'England',
}

/**
 * @type {Student[]}
 */
const studentList: Array<Student> = [
  student1,
  student2,
];

const studentsList: Student[] = [
  student1,
  student2
];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "lightgray";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "2px solid white";
  locationCell.style.border = "2px solid white";
  nameCell.style.padding = "4px";
  locationCell.style.padding = "4px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
