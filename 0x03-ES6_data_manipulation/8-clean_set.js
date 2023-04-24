function cleanSet(set, startString) {
  const myArr = [];
  set.forEach((value) => {
    if (startString && value.startsWith(startString)) {
      myArr.push(value.slice(startString.length));
    }
  });
  return myArr.join('-');
}
export default cleanSet;
