/*Створити 3 інпута та кнопку. Один визначає кількість рядків,
  другий - кількість ячеєк, третій вмиіст ячеєк.
  При натисканні кнопки, вся ця інформація зчитується і формується табличка,
  з відповідним вмістом.*/

const generateButton = document.getElementById('generateButton');
const tableContainer = document.getElementById('tableContainer');

generateButton.addEventListener('click', () => {
    const rows = parseInt(document.getElementById('rows').value, 10);
    const columns = parseInt(document.getElementById('columns').value, 10);
    const content = document.getElementById('content').value;

    if (!rows || !columns || rows < 1 || columns < 1) {
        alert('enter the correct values');
        return;
    }

    tableContainer.innerHTML = '';

    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.textContent = content || ' ';
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
});
