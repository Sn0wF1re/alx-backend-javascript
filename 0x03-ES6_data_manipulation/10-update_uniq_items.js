function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const key of map.keys()) {
      if (map.get(key) === 1) map.set(key, 100);
    }
  }
  return map;
}
export default updateUniqueItems;
