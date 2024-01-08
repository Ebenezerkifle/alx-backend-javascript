export default function createIteratorObject(report) {
  // returns a list of employees from each object.
  let employeeList = [];
  for (const dep in report.allEmployees) {
    // dep is a property(key) and here we are checking
    // if that property exists.
    if (report.allEmployees.hasOwnProperty(dep)) {
      const employees = report.allEmployees[dep];
      for (const employee of employees) {
        employeeList.push(employee);
      }
    }
  }

  return employeeList;
}
