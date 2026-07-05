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

const dataOrders = [
    { number: 'A-1', client: 'Анна', items: [{ price: 1000, count: 2 }], status: 'готов' },
    { number: 'A-2', client: 'Иван', items: [{ price: 3000, count: 1 }, { price: 500, count: 2 }], status: 'новый' },
];
function getItemsCount(items) {
    return items.reduce((sum, item) => sum + item.count, 0);
}
function getItemsTotal(items) {
    return items.reduce((sum, item) => sum + item.price * item.count, 0);
}
const ordersTable = document.querySelector('#orders-table');
if (ordersTable) {
    ordersTable.innerHTML = dataOrders.map((order) => `<tr><td>${order.number}</td><td>${order.client}</td><td>${getItemsCount(order.items)}</td><td>${getItemsTotal(order.items)}</td><td>${order.status}</td></tr>`).join('');
}

const catalogItems = [
    { title: 'Мышь', price: 1000, category: 'Периферия' },
    { title: 'Монитор', price: 15000, category: 'Техника' },
    { title: 'Клавиатура', price: 3000, category: 'Периферия' },
];
function filterCatalog(products, query, category) {
    return products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()) && (category === 'all' || product.category === category));
}
function sortCatalog(products, direction) {
    const result = [...products];
    if (direction === 'asc') result.sort((a, b) => a.price - b.price);
    if (direction === 'desc') result.sort((a, b) => b.price - a.price);
    return result;
}
function renderDataCatalog() {
    const query = document.querySelector('#data-search').value;
    const category = document.querySelector('#data-category').value;
    const direction = document.querySelector('#data-sort').value;
    const products = sortCatalog(filterCatalog(catalogItems, query, category), direction);
    document.querySelector('#data-catalog').innerHTML = products.map((product) => `<article class="card"><h3>${product.title}</h3><p>${product.price} ₽</p></article>`).join('');
}
['#data-search', '#data-category', '#data-sort'].forEach((selector) => document.querySelector(selector)?.addEventListener('input', renderDataCatalog));
renderDataCatalog();

function filterByCategory(products, category) {
    return products.filter((product) => category === 'all' || product.category === category);
}
function searchProducts(products, query) {
    return products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
}
function sortByPrice(products, direction) {
    const result = [...products];
    if (direction === 'asc') return result.sort((a, b) => a.price - b.price);
    if (direction === 'desc') return result.sort((a, b) => b.price - a.price);
    return result;
}
function formatProducts(products) {
    return products.map((product) => `${product.title}: ${product.price} ₽`);
}
const pureResult = formatProducts(sortByPrice(searchProducts(filterByCategory(catalogItems, 'Периферия'), 'а'), 'asc'));
const pureFunctions = document.querySelector('#pure-functions');
if (pureFunctions) pureFunctions.textContent = pureResult.join(', ');

const rawProducts = [
    { name: 'mouse', price: 1000, available: true },
    { name: 'keyboard', price: 3000, available: false },
];
const uiProducts = rawProducts.map((product) => ({
    title: product.name[0].toUpperCase() + product.name.slice(1),
    price: `${product.price} ₽`,
    availableText: product.available ? 'В наличии' : 'Нет в наличии',
    className: product.available ? 'available' : 'not-available',
}));
const rawProductsContainer = document.querySelector('#raw-products');
if (rawProductsContainer) {
    rawProductsContainer.innerHTML = uiProducts.map((product) => `<article class="card ${product.className}"><h3>${product.title}</h3><p>${product.price}</p><p>${product.availableText}</p></article>`).join('');
}
