/*В localStorage зберігаються масиви.
Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
сигнатура функції -  addToLocalStorage(arrayName:string,objToAdd:any{}):void*/

function addToLocalStorage(arrayName, objToAdd) {
    let lsItem = localStorage.getItem(arrayName);

    let array = [];
    if (lsItem) {
        array = JSON.parse(lsItem);
    }

    if (typeof objToAdd === 'object' && objToAdd !== null) {
        array.push(objToAdd);
    } else {
        throw new Error('must be a non null object.');
    }

    localStorage.setItem(arrayName, JSON.stringify(array));
}

const now = new Date().toISOString();

addToLocalStorage('sessionsList', {id: now, name: `${now}`});

console.log(JSON.parse(localStorage.getItem('sessionsList')) || 'Array is empty');



