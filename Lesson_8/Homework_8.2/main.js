/*- є масив
за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course})));