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

const searchProductsList = ['Ноутбук', 'Мышь', 'Клавиатура', 'Монитор', 'Коврик'];

function renderSearchProducts(products) {
    const result = document.querySelector('#array-search-result');
    result.innerHTML = '';
    if (products.length === 0) {
        result.textContent = 'Ничего не найдено';
        return;
    }
    products.forEach((product) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.textContent = product;
        result.append(div);
    });
}

document.querySelector('#array-search-button')?.addEventListener('click', () => {
    const query = document.querySelector('#array-search').value.toLowerCase();
    const filtered = searchProductsList.filter((product) => product.toLowerCase().includes(query));
    renderSearchProducts(filtered);
});

const usersById = [
    { id: 1, name: 'Анна' },
    { id: 2, name: 'Иван' },
    { id: 3, name: 'Олег' },
];

document.querySelector('#user-id-button')?.addEventListener('click', () => {
    const id = Number(document.querySelector('#user-id-input').value);
    const user = usersById.find((item) => item.id === id);
    document.querySelector('#user-id-result').textContent = user ? user.name : 'Пользователь не найден';
});
