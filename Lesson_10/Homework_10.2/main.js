/*створити інпут який приймає вік людини та кнопку яка підтверджує дію.
  При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
  та повідомити про це користувача*/

const ageInput = document.getElementById('age');
const checkButton = document.getElementById('check');
const message = document.getElementById('message');

checkButton.addEventListener('click', function() {
    const age = ageInput.value.trim();

    if (age === '') {
        message.textContent = 'enter your age';
    } else if (age < 18) {
        message.textContent = 'your age is under 18 years old';
    } else {
        message.textContent = 'your age is over 18 years old';
    }
});