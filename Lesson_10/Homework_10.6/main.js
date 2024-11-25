/*створити конвертор ваги з кг в фунти.
    данні заповнюються через інпут.
    При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок*/

const kgWeight = document.getElementById('kgWeight');
const poundsWeight = document.getElementById('poundsWeight');

function convertKgToLbs() {
    const kg = parseFloat(kgWeight.value);
    const pounds = kg * 2.2;
    poundsWeight.textContent = pounds.toFixed(2);
}

kgWeight.addEventListener('input', convertKgToLbs);
