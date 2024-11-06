/*Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/

let number1 = prompt('enter number');
let number2 = prompt('enter number');
number1 = Number(number1);
number2 = Number(number2);
if (number1 > number2) {
    console.log('maximum number:' + ' ' + number1);
} else if (number2 > number1) {
    console.log('maximum number:' + ' ' + number2);
} else {
    console.log('numbers are equal');
}


