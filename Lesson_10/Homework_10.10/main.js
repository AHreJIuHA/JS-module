/* ***PAGINATION
зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться наступні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів*/

const items = Array.from({ length: 100 }, (_, index) => ({ name: `Object ${index + 1}` }));
const itemList = document.getElementById('itemList');
const prevPageButton = document.getElementById('prevButton');
const nextPageButton = document.getElementById('nextButton');
let currentPage = 0;
const itemsPerPage = 10;

function displayItems() {
    const startIndex = currentPage * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
    itemList.innerHTML = currentItems.map(item => `<p>${item.name}</p>`).join('');
    updatePageButtons();
}

function updatePageButtons() {
    prevPageButton.disabled = currentPage === 0;
    nextPageButton.disabled = (currentPage + 1) * itemsPerPage >= items.length;
}

prevPageButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayItems();
    }
});
nextPageButton.addEventListener('click', () => {
    if ((currentPage + 1) * itemsPerPage < items.length) {
        currentPage++;
        displayItems();
    }
});

displayItems();