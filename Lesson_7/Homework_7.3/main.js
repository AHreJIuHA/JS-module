/*Взяти масив з  User[] з попереднього завдання,
  та відсортувати його по id. по зростанню (sort)*/

function User(id, name, surname, phoneNumber) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
}

let users = [
    new User(3, 'Adriana', 'Chechik', '+13471242205'),
    new User(7, 'Vina', 'Sky', '+13471242205'),
    new User(10, 'Sasha', 'Grey', '+13471242205'),
    new User(8, 'Ashlynn', 'Brooke', '+13471242205'),
    new User(2, 'Alexis', 'Texas', '+13471242205'),
    new User(5, 'Riley', 'Reid', '+13471242205'),
    new User(1, 'Elsa', 'Jean', '+13471242205'),
    new User(4, 'Gina', 'Valentina', '+13471242205'),
    new User(6, 'Megan', 'Rain', '+13471242205'),
    new User(9, 'Johnny', 'Sins', '+13471242205')
];

console.log(users.sort((User1, User2) => User1.id - User2.id));





