/*Через Array.prototype. створити власний foreach, filter*/

Array.prototype.myForEach = function (callback) {
    const yourArray = this;
    for (const item of yourArray) {
        callback(item);
    }
};

[22, 5, 19, 66].myForEach((x) => console.log(x));

Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};

let users = [
    {name: 'Adriana', age: 33, status: true},
    {name: 'Vina', age: 25, status: false},
    {name: 'Sasha', age: 36, status: true},
    {name: 'Ashlynn', age: 39, status: true},
    {name: 'Alexis', age: 39, status: false},
    {name: 'Riley', age: 33, status: false},
    {name: 'Elsa', age: 28, status: false},
    {name: 'Gina', age: 27, status: true},
    {name: 'Megan', age: 28, status: true},
    {name: 'Stormy', age: 45, status: false},
];

const result = users.myFilter((user) => user.status);
console.log(result);





