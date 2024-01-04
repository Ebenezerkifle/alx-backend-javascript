export default function createReportObject(employeesList){
    const result ={
        allEmployees:employeesList,
        getNumberOfDepartments: (employees)=> Object.keys(employees).length,
    };
    return result;
}