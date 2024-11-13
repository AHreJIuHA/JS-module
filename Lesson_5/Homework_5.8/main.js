// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const listArray = (listArray) => {
    document.write('<ul>');
    for (const text of listArray) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};

listArray([22, 'Nintendo', true, 'Blizzard', false, 'Guerrilla Games']);