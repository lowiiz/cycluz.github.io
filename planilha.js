
const addRowBtn = document.querySelector('.add-row-btn');
const addColumnBtn = document.querySelector('.add-column-btn');



function addColumn() {
    let colname = window.prompt("Qual o nome da Coluna")
    const table = document.querySelector('table');
    const thead = table.querySelector('thead');
    if (!thead) {
        return;
    }
    // Create a new header cell for the header row
    const th = document.createElement('th');
    th.textContent = colname;
    thead.querySelector('tr').appendChild(th);

    // Get the first row of the table body
    const tbody = table.querySelector('tbody');
    const rows = tbody.getElementsByTagName('tr');

    // Loop through each row and add a new cell with an input field of type number
    for (let i = 0; i < rows.length; i++) {
        const newCell = document.createElement('td');
        const newInput = document.createElement('input');
        newInput.classList.add('inputnumber');
        newInput.type = 'number';
        newCell.appendChild(newInput);
        rows[i].appendChild(newCell);
    }
}
function addRow() {
    let rowname = window.prompt("Qual o nome da Linha?");
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    if (!tbody) {
        return;
    }
    const newRow = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = rowname;
    newRow.appendChild(th);
    tbody.appendChild(newRow);

    const rows = tbody.getElementsByTagName('tr');
    const headerRow = tbody.querySelector('tr:first-child');
    for (let i = 1; i < headerRow.children.length; i++) {
        const newCell = document.createElement('td');
       const newInput = document.createElement('input');
        newInput.classList.add('inputnumber');
        newInput.type = 'number';
        newCell.appendChild(newInput);
        newRow.appendChild(newCell);
    }
}

addRowBtn.addEventListener('click', addRow);