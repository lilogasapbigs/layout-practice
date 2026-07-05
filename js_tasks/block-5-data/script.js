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

const dataUsers = [
    { id: 1, name: 'Анна', email: 'anna@example.com', role: 'admin', active: true },
    { id: 2, name: 'Иван', email: 'ivan@example.com', role: 'user', active: false },
    { id: 3, name: 'Олег', email: 'oleg@example.com', role: 'admin', active: true },
];
const activeUsers = dataUsers.filter((user) => user.active);
const adminUsers = dataUsers.filter((user) => user.role === 'admin');
const userEmails = dataUsers.map((user) => user.email);
const inactiveCount = dataUsers.filter((user) => !user.active).length;
const preparedUsers = document.querySelector('#prepared-users');
if (preparedUsers) {
    preparedUsers.innerHTML = `<p>Активные: ${activeUsers.map((u) => u.name).join(', ')}</p><p>Админы: ${adminUsers.map((u) => u.name).join(', ')}</p><p>Email: ${userEmails.join(', ')}</p><p>Неактивных: ${inactiveCount}</p>`;
}
