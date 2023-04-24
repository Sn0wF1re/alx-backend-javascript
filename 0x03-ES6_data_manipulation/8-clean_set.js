function cleanSet(set, startString) {
  const myArr = [];
  if (startString && typeof startString === 'string') {
    set.forEach((item) => {
      if (item && item.startsWith(startString)) {
        myArr.push(item.slice(startString.length));
      }
    });
  }
  return myArr.join('-');
}
export default cleanSet;
