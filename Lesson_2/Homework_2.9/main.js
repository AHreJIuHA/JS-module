/*Скласти розклад на тиждень за домопоги switch.
Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
(можна замість плану на день, назву дня англійською).*/

let dayOfTheWeekNumber = prompt('Enter the number of the day of the week from 1 to 7');
dayOfTheWeekNumber = parseInt(dayOfTheWeekNumber);
switch (dayOfTheWeekNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Enter the number of the day of the week from 1 to 7');
}



