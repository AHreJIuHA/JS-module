/*- Є масив
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.forEach(course => {
    const div = document.createElement('div');
    div.innerText = `Title: ${course.title}, Month Duration: ${course.monthDuration}`;
    document.body.appendChild(div);
});

/*
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `Title: ${course.title}, Month Duration: ${course.monthDuration}`;
    document.body.appendChild(div);
}*/