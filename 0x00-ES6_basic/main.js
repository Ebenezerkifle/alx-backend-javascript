import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from "./12-createReportObject.js";
import createIteratorObject from "./100-createIteratorObject.js";
import iterateThroughObject from "./101-iterateThroughObject.js";
import getListStudents from "../0x03-ES6_data_manipulation/1-get_list_student_ids.js";

console.log('----------------------------------------------');
const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};      

const report1 = createReportObject(employees);
console.log(report1.allEmployees);
console.log('----------------------------------------------');
const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}
console.log('*********************************************');
const employees2 = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report3 = createReportObject(employees2);
const reportWithIterator2 = createIteratorObject(report3);

console.log(iterateThroughObject(reportWithIterator2));
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%50');
console.log(getListStudents());