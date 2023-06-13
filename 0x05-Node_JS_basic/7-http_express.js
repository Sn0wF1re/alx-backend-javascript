const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const countStudents = (path) => {
  const students = {};
  const fields = {};
  let i = 1;
  return new Promise((resolve, reject) => {
    fs.readFile(path, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().trim().split('\n');
        while (i < lines.length) {
          if (lines[i]) {
            const split = lines[i].split(',');
            const firstName = split[0];
            const field = split[3];
            if (Object.prototype.hasOwnProperty.call(students, field)) {
              students[field].push(firstName);
            } else {
              students[field] = [firstName];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field)) {
              fields[field] += 1;
            } else {
              fields[field] = 1;
            }
          }
          i += 1;
        }
        console.log(`Number of students: ${i - 1}`);
        for (const [key, value] of Object.entries(fields)) {
          const courseStudents = students[key].join(', ');
          console.log(
            `Number of students in ${key}: ${value}. List: ${courseStudents}`,
          );
        }
        resolve(data);
      }
    });
  });
};
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((result) => {
      res.send(['This is the list of our students', result].join('\n'));
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port);

module.exports = app;
