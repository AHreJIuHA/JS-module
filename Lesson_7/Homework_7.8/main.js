/*створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellas = [
    new Cinderella('Vina', 25, 37),
    new Cinderella('Sasha', 36, 38),
    new Cinderella('Ashlynn', 39, 39),
    new Cinderella('Alexis', 39, 40),
    new Cinderella('Adriana', 33, 36),
    new Cinderella('Riley', 33, 41),
    new Cinderella('Elsa', 28, 42),
    new Cinderella('Gina', 27, 43),
    new Cinderella('Megan', 28, 44),
    new Cinderella('Stormy', 45, 45)

];

const prince = new Prince('Johnny', 45, 36);

const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
if (cinderellaMain) {
    console.log(`The prince ${prince.name} found his Cinderella whose name is ${cinderellaMain.name}, who is ${cinderellaMain.age} years old, foot size: ${cinderellaMain.footSize}`);
} else {
    console.log('Cinderella not found');
}







