/*
Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
Вивести в консоль пароль кожного користувача*/

let users = [
    {name: 'Leanne Graham', username: 'Bret', password: 'qwerty'},
    {name: 'Ervin Howell', username: 'Antonette', password: 'asdfgh'},
    {name: 'Clementine Bauch', username: 'Samantha', password: 'qweweqw'},
    {name: 'Patricia Lebsack', username: 'Karianne', password: 'dfascasc'},
    {name: 'Chelsey Dietrich', username: 'Kamren', password: 'lkjlhjscs'},
    {name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', password: 'iohsdcb'},
    {name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', password: 'fbccvbcx'},
    {name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', password: 'qrfvfbtgb'},
    {name: 'Glenna Reichert', username: 'Delphine', password: 'lksndjksjkd'},
    {name: 'Clementina DuBuque', username: 'Moriah.Stanton', password: 'poiuyu'},
]
users.forEach(user => {
    console.log(user.password);
});

