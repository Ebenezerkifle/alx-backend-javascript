import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from "./12-createReportObject.js";
import createIteratorObject from "./100-createIteratorObject.js";
import iterateThroughObject from "./101-iterateThroughObject.js";
import getListStudentIds from "../0x03-ES6_data_manipulation/1-get_list_student_ids.js";
import getListStudents from "../0x03-ES6_data_manipulation/0-get_list_students.js";
import getStudentsByLocation from "../0x03-ES6_data_manipulation/2-get_students_by_loc.js";
import getStudentIdsSum from "../0x03-ES6_data_manipulation/3-get_ids_sum.js";
import updateStudentGradeByCity from "../0x03-ES6_data_manipulation/4-update_grade_by_city.js";
import setFromArray from "../0x03-ES6_data_manipulation/6-set.js";
import hasValuesFromArray from "../0x03-ES6_data_manipulation/7-has_array_values.js";
import cleanSet from "../0x03-ES6_data_manipulation/8-clean_set.js";

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
console.log(getListStudentIds(getListStudents()));
console.log(getListStudentIds("Abeni"));
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%50');

// const students = getListStudents();

// console.log(getStudentsByLocation(students, 'San Francisco'));

// const students = getListStudents();
// const value = getStudentIdsSum(students);

// console.log(value);
console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }, { studentId: 1, grade: 86 }]));

console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 5, grade: 97 }]));
console.log('***********************************');

console.log(setFromArray([12, 32, 15, 78, 98, 15]));

console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7');
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));


console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&7');
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));