function getStudentsByLocation(listObjs, city) {
  if (Array.isArray(listObjs) && typeof city === 'string') {
    return listObjs.filter((x) => x.location === city);
  }
  return [];
}
export default getStudentsByLocation;
