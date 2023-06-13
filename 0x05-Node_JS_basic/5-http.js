const http = require('http');
const fs = require('fs');

const port = 1245;
const hostname = '127.0.0.1';

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
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((result) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(result.slice(0, -1));
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});
app.listen(port, hostname);

module.exports = app;
