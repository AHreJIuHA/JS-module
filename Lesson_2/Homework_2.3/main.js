/*Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/

let books = [
    {
        title: 'Welcome to the Universe: An Astrophysical Tour',
        pageCount: 472,
        genre: 'Non-fiction',
        authors: [
            {name: 'Neil deGrasse Tyson', age: 66},
            {name: 'Michael A. Strauss', age: 63},
            {name: 'J. Richard Gott', age: 77}
        ]
    },
    {
        title: 'The Large Scale Structure of Space-Time',
        pageCount: 391,
        genre: 'Non-fiction',
        authors: [
            {name: 'Stephen William Hawking;', age: 76},
            {name: 'George Francis Rayner Ellis', age: 85}
        ]
    },
    {
        title: 'he Grand Design',
        pageCount: 208,
        genre: 'Non-fiction',
        authors: [
            {name: 'Stephen William Hawking;', age: 76},
            {name: 'Leonard Mlodinow', age: 69}
        ]
    }
];
console.log(books)

