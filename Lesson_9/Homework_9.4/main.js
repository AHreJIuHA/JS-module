/*Є масив
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
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
    div.classList.add('item');

    const coursesTitle = document.createElement('h1');
    coursesTitle.classList.add('heading');
    coursesTitle.innerText = course.title;

    const coursesDescription = document.createElement('p');
    coursesDescription.classList.add('description');
    coursesDescription.innerText = `Duration: ${course.monthDuration} months`;

    div.append(coursesTitle, coursesDescription);

    document.body.appendChild(div);
});

/*
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');

    const coursesTitle = document.createElement('h1');
    coursesTitle.classList.add('heading');
    coursesTitle.innerText = course.title;

    const coursesDescription = document.createElement('p');
    coursesDescription.classList.add('description');
    coursesDescription.innerText = `Duration: ${course.monthDuration} months`;

    div.append(coursesTitle, coursesDescription);

    document.body.appendChild(div);
}*/