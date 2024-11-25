/*Створити форму з трьома полями для name,surname,age та кнопкою.
  При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
  ' +' Іншими словами : заповнили форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом*/

const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const ageInput = document.getElementById('age');
const submitButton = document.getElementById('submitButton');
const textOutput = document.getElementById('textOutput');

submitButton.addEventListener('click', function () {

    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const age = ageInput.value.trim();

    if (!name || !surname || !age) {
        textOutput.innerHTML = '<p>form is not filled out</p>';
        return;
    }

    const user = {
        name: name,
        surname: surname,
        age: +age,
    };

    textOutput.innerHTML = `<p>${JSON.stringify(user, null)}</p>`;
});
