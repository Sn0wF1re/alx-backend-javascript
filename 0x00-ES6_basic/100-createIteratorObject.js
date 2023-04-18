export default function createIteratorObject(report) {
  const employees = [];
  for (const items of Object.values(report.allEmployees)) {
    employees.push(...items);
  }
  return employees;
}
