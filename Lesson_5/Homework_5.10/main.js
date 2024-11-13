// створити функцію яка повертає найменьше число з масиву

const minimumValueFromArray = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number
        }
    }
    return min;
}
console.log(minimumValueFromArray([3, 19, -22, 66, 9, 90]));
