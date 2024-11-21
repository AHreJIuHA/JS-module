/*- Є масив:
['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/

const items = ['Main', 'Products', 'About us', 'Contacts'];

const ul = document.createElement('ul');

/*for (const item of items) {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}*/

items.forEach(item => ul.appendChild(Object.assign(document.createElement('li'), { innerText: item })));

ul.style.backgroundColor = 'red';
ul.style.color = 'yellow';
ul.style.fontSize = '50px';

document.body.appendChild(ul);