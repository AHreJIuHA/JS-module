/*Створити функцію, яка робить глибоку копію об'єкту.
Додати перевірки на undefined, null, NaN.
Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,
які в нього були до цього моменту.*/

const originalObject = {
    id: 123,
    username: 'Adriana',
    sayHi() {
        console.log(`Hi, my name is ${this.username}`);
    },
    data: {
        numbers: [22, 5, 66],
        deepData: {key: 'value'}
    },
};

function deepClone(object) {
    if (object === null || object === undefined || typeof object !== 'object') {
        return object;
    }

    const functions = [];
    for (const key in object) {
        if (typeof object[key] === 'function') {
            functions.push({key, value: object[key]});
        }
    }

    const clone = JSON.parse(JSON.stringify(object));

    functions.forEach(({key, value}) => {
        clone[key] = value;
    });

    return clone;
}

const clonedObject = deepClone(originalObject);

clonedObject.username = 'Johnny';
clonedObject.sayHi = function () {
    console.log(`Hello, my name is ${this.username}`);
};

originalObject.sayHi();
clonedObject.sayHi();

console.log('Original Object:', originalObject);
console.log('Cloned Object:', clonedObject);



