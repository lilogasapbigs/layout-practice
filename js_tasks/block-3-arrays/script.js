'use strict';

const arrayProducts = ['Ноутбук', 'Мышь', 'Клавиатура', 'Монитор'];

function renderArrayCatalog() {
    const container = document.querySelector('#array-catalog');
    container.innerHTML = '';
    for (const product of arrayProducts) {
        const card = document.createElement('article');
        card.className = 'card';
        card.textContent = product;
        container.append(card);
    }
}

document.querySelector('#array-catalog-button')?.addEventListener('click', renderArrayCatalog);
