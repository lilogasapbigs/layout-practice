'use strict';

const dataProducts = [
    { title: 'Мышь', price: 1000, category: 'Периферия' },
    { title: 'Монитор', price: 15000, category: 'Техника' },
];
const preparedProducts = dataProducts.map((product) => ({
    ...product,
    priceText: `${product.price} ₽`,
    categoryText: `Категория: ${product.category}`,
    label: `${product.title} — ${product.category}`,
}));
document.querySelector('#prepared-products')?.insertAdjacentHTML('beforeend', preparedProducts.map((product) => `<article class="card"><h3>${product.label}</h3><p>${product.priceText}</p><p>${product.categoryText}</p></article>`).join(''));

const categories = ['Периферия', 'Техника', 'Мебель'];
const categoryProducts = [
    { title: 'Мышь', category: 'Периферия' },
    { title: 'Монитор', category: 'Техника' },
];
const categoryCatalog = document.querySelector('#category-catalog');
if (categoryCatalog) {
    categories.forEach((category) => {
        const items = categoryProducts.filter((product) => product.category === category);
        const block = document.createElement('div');
        block.className = 'card';
        block.innerHTML = `<h3>${category}</h3><p>${items.length ? items.map((item) => item.title).join(', ') : 'Товаров нет'}</p>`;
        categoryCatalog.append(block);
    });
}
