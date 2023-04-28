interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 26,
  location: 'NBO',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Deer',
  age: 24,
  location: 'NKR',
};

const studentsList = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

for (const student of studentsList) {
  const row = document.createElement('tr');
  const name = document.createElement('td');
  const location = document.createElement('td');

  name.textContent = student.firstName;
  location.textContent = student.location;

  row.appendChild(name);
  row.appendChild(location);
  tbody.appendChild(row);
}

document.body.appendChild(table);
