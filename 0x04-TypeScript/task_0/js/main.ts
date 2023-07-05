interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Yemsrach',
    lastName: 'Beza',
    age: 29,
    location: 'Addis Ababa',
};
const student2: Student = {
    firstName: 'Meseret',
    lastName: 'Ayalew',
    age: 35,
    location: 'Ethiopia',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody = document.createElement('tbody');

const rowHead: HTMLTableRowElement = thead.insertRow(0);
const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);



cell1Head.innerHTML = "firstName";
cell2Head.innerHTML = "location";

table.append(thead);



table.style.background = "lightgray";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    nameCell.style.border = "2px solid white";
    locationCell.style.border = "2px solid white";
    nameCell.style.padding = "4px";
    locationCell.style.padding = "4px";

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

document.body.appendChild(table);
