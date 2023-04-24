function getListStudentIds(listObjs) {
  if (Array.isArray(listObjs)) {
    return (listObjs.map((x) => x.id));
  }
  return [];
}
export default getListStudentIds;
