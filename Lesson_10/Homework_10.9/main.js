/* *** (подібне було вище, але...будьте уважні в другій частині)
    створити сторінку з довільним блоком, в середині якого є значення "100грн"
    при перезавантаженні сторінки до значаення додається по 10грн, але !!!
    зміна ціни відбувається тільки на перезавантаження,
    які відбулись пізніше ніж 10 секунд після попереднього.
    При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається*/

const priceBlock = document.getElementById('priceBlock');
const now = Date.now();
let price = +(localStorage.getItem('price') || 100);
let lastUpdateTime = +(localStorage.getItem('lastUpdateTime') || 0);

if (now - lastUpdateTime >= 10000) {
    price += 10;
    localStorage.setItem('price', price);
    localStorage.setItem('lastUpdateTime', now);
}

priceBlock.textContent = `${price}грн`;


