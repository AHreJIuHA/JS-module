/* взяти https://dummyjson.com/carts та вивести інформацію про всі корзини.
   Відобразити всі поля кожної корзини.*/

const cartsDiv = document.getElementById('carts');

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
        data.carts.forEach(cart => {
            const div = document.createElement('div');

            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
                total: ${cart.total},
                discountedTotal: ${cart.discountedTotal},
                userId: ${cart.userId},
                totalProducts: ${cart.totalProducts},
                totalQuantity: ${cart.totalQuantity}
            `;

            const ol = document.createElement('ol');
            cart.products.forEach(product => {
                const li = document.createElement('li');

                const img = document.createElement('img');
                img.src = product.thumbnail;

                const info = document.createElement('p');
                info.innerText = `
                    id: ${product.id},
                    title: ${product.title},
                    price: ${product.price},
                    quantity: ${product.quantity},
                    total: ${product.total},
                    discountPercentage: ${product.discountPercentage},
                    discountedTotal: ${product.discountedTotal}
                `;

                li.append(info, img);

                ol.appendChild(li);
            });

            div.append(divWithInfo, ol);

            cartsDiv.appendChild(div);
        });
    })