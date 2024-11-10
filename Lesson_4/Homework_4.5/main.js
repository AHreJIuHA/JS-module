// створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function printParagraph(text) {
    document.write(`<p>${text}</p>`);
}
printParagraph(`I am the text in the paragraph`);
printParagraph(`I am another text in the paragraph`);