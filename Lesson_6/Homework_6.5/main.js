/*Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

function stringToArray(str) {
    if (str) {
        const arrayOfString = str.split(' ');
        return arrayOfString;
    }
    return [''];
}
console.log(stringToArray('Ревуть воли як ясла повні'));

