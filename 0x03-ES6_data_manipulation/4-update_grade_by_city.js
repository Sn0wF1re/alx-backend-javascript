function updateStudentGradeByCity(listObjs, city, newGrades) {
  const byLoc = listObjs.filter((student) => student.location === city);
  const updateGrades = byLoc.map(
    (student) => {
      for (const studentInfo of newGrades) {
        if (student.id === studentInfo.studentId) {
          student.grade = studentInfo.grade; // eslint-disable-line no-param-reassign
        }
      }
      if (student.grade === undefined) student.grade = 'N/A'; // eslint-disable-line no-param-reassign
      return student;
    },
  );
  return updateGrades;
}
export default updateStudentGradeByCity;
