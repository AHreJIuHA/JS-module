/* взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
   Інгредієнти повинні бути список під час відображення.*/

const apiUrl = new URL('https://dummyjson.com/recipes');
apiUrl.searchParams.set('limit', '50');

const container = document.querySelector('.container');
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const {recipes} = data;
        recipes.forEach((recipe) => {
            const recipeContainer = document.createElement('div');
            recipeContainer.classList.add('recipe-container');

            for (const [field, value] of Object.entries(recipe)) {
                if (Array.isArray(value)) {
                    recipeContainer.appendChild(createListSection(field, value));
                } else if (field === 'image' && value) {
                    const image = document.createElement('img');
                    image.src = value;
                    image.alt = `${recipe.name || 'Recipe'} image`;
                    recipeContainer.appendChild(image);
                } else {
                    recipeContainer.appendChild(createFieldSection(field, value));
                }
            }

            container.appendChild(recipeContainer);
        });
    })

function createFieldSection(label, content) {
    const fieldDiv = document.createElement('div');
    fieldDiv.innerText = `${label}: ${content}`;
    return fieldDiv;
}

function createListSection(label, items) {
    const listContainer = document.createElement('div');
    const listTitle = document.createElement('div');
    listTitle.innerText = `${label}:`;
    const list = document.createElement('ol');

    items.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerText = item;
        list.appendChild(listItem);
    });

    listContainer.append(listTitle, list);
    return listContainer;
}
