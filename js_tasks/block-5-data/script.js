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
