const newRowBtn = document.getElementById('new-row-btn');
const jokeriTable = document.getElementById('jokeri-table');
const rowCountElem = document.getElementById('row-count');

let rowCount = 0;

newRowBtn.addEventListener('click', addNewRow);

function addNewRow() {
    
    const newRow = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement('td');
        
        const randomNumber = Math.floor(Math.random() * 10);
        newCell.textContent = randomNumber;
        
        newRow.appendChild(newCell);
    }

    
    jokeriTable.appendChild(newRow);

    rowCount++;
    rowCountElem.textContent = rowCount;
}
