/*створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

function swap(arr, number1, number2) {
    if (number1 < arr.length && number2 < arr.length) {
        let temp = arr[number1];
        arr[number1] = arr[number2];
        arr[number2] = temp;
        return arr;
    }
    return -Infinity;
}
console.log(swap([22, 5, 19, 66], 0, 1));
