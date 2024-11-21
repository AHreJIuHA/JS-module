/*- створити блок,
  - додати йому класи wrap, collapse, alpha, beta
  - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
  - додати цей блок в body.
  - клонувати його повністю, та додати клон в body.*/

const block = document.createElement('div');

block.classList.add('wrap', 'collapse', 'alpha', 'beta');

block.innerText = 'Hello =) I am funny block';
block.style.backgroundColor = 'red';
block.style.color = 'yellow';
block.style.margin = '30px';
block.style.fontSize = '50px';

const clonedBlock = block.cloneNode(true);

clonedBlock.innerText = 'Hello =) I am another funny block';
clonedBlock.style.backgroundColor = 'black';
clonedBlock.style.color = 'red';
clonedBlock.style.fontSize = '40px';

document.body.append(block, clonedBlock);