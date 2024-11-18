/*Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
  залишивши тільки об'єкти з парними id (filter)*/

function User(id, name, surname, phoneNumber) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
}

let users = [
    new User(1, 'Adriana', 'Chechik', '+13471242205'),
    new User(2, 'Vina', 'Sky', '+13471242205'),
    new User(3, 'Sasha', 'Grey', '+13471242205'),
    new User(4, 'Ashlynn', 'Brooke', '+13471242205'),
    new User(5, 'Alexis', 'Texas', '+13471242205'),
    new User(6, 'Riley', 'Reid', '+13471242205'),
    new User(7, 'Elsa', 'Jean', '+13471242205'),
    new User(8, 'Gina', 'Valentina', '+13471242205'),
    new User(9, 'Megan', 'Rain', '+13471242205'),
    new User(10, 'Johnny', 'Sins', '+13471242205')
];
const filteringUsersByEvenValue = users.filter((User) => User.id % 2 === 0);
console.log(filteringUsersByEvenValue);




