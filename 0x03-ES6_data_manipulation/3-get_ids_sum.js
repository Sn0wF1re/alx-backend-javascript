function getStudentIdsSum(listObjs) {
  if (Array.isArray(listObjs)) {
    return (listObjs.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0));
  }
  return [];
}
export default getStudentIdsSum;
