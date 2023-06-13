const fs = require('fs');

const readDatabase = (path) => {
  const students = {};
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().trim().split('\n');
        const studentInfo = lines.slice(1);
        for (let i = 0; i < studentInfo.length; i += 1) {
          if (studentInfo[i]) {
            const field = studentInfo[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }
        resolve(students);
      }
    });
  });
};
export default readDatabase;
module.exports = readDatabase;
