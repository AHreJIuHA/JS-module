/*
За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/

let i = 0;
while (i < 20) {
    document.write(`<h1>I am a headline №${i + 1} with random text ${i + 1}</h1>`);
    i++;
}