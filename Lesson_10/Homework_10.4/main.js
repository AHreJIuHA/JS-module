/*є сторінка, на якій є блок, в якому знаходиьтся цифра.
  написати код, який при кожному перезавантажені сторінки буде додавати до неї +1*/

let counter = +localStorage.getItem('number') || 0;

counter += 1;

localStorage.setItem('number', counter);

document.getElementById('counter').innerText = `counter : ${counter}`;