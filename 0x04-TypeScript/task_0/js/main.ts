interface Student{
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let studnet1: Student = {
  firstName: 'Abeniezer',
  lastName: 'Kifle',
  age: 26,
  location: 'Addis Ababa, Ethiopia',
};

let student2: Student = {
  firstName: 'Elsabet',
  lastName: 'Getnet',
  age: 24,
  location: 'Addis Ababa, Ethiopia',
};

let studentsList: Array<Student> = [studnet1, student2];

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student: Student): void => {
	const newRow: HTMLTableRowElement = table.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})
