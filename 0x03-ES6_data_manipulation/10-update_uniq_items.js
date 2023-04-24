function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const key of map.keys()) {
      if (map.get(key) === 1) map.set(key, 100);
    }
  } else {
    throw new Error('Cannot process');
  }
  return map;
}
export default updateUniqueItems;
