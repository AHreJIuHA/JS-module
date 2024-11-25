/*Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".*/

const button = document.getElementById('hide');
const div = document.getElementById('text');

button.addEventListener('click', function() {
    div.remove();
});


