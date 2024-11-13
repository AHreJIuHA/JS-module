// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const objects = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}
objects([
    {id: 1, name:'Guerrilla Games', age: 24},
    {id: 2, name:'CD Projekt RED', age: 22},
    {id: 3, name:'Capcom', age: 45},
    {id: 4, name:'FromSoftware', age: 38}
]);

