'use strict';
/*  json data is from https://api.sampleapis.com/ */

// Part 1: Fetch Data
const icedCoffeeButton = document.querySelector('button:first-of-type');
icedCoffeeButton.addEventListener('click', function() {
    fetch('data/iced.json')
        .then(response => response.json())
        .then(data => {
            addDrinks(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

const hotCoffeeButton = document.querySelector('button:last-of-type');
hotCoffeeButton.addEventListener('click', function() {
    fetch('data/hot.json')
        .then(response => response.json())
        .then(data => {
            addDrinks(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

// Part 2: Add Elements to the DOM
function addDrinks(drinks) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    drinks.forEach(drink => {
        const article = document.createElement('article');
        article.classList.add('card');

        const img = document.createElement('img');
        img.src = drink.image;
        img.alt = drink.title;
        article.appendChild(img);

        const content = document.createElement('div');
        content.classList.add('content');

        const title = document.createElement('h3');
        title.textContent = drink.title;

        const description = document.createElement('p');
        description.textContent = `${drink.description} Ingredients include:`;

        const ingredientsContainer = document.createElement('div');
        ingredientsContainer.classList.add('ingredients');
        
        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(ingredientsContainer);

        drink.ingredients.forEach(ingredient => {
            const ingredientDiv = document.createElement('div');
            ingredientDiv.classList.add('ingredient');
            ingredientDiv.textContent = ingredient;
            ingredientsContainer.appendChild(ingredientDiv);
        });

        article.appendChild(content);
        container.appendChild(article);
    });
}