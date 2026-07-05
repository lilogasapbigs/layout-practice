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

const prices = [500, 1200, 3000, 700];

document.querySelector('#prices-button')?.addEventListener('click', () => {
    const discountedPrices = prices.map((price) => price * 0.9);
    const lines = discountedPrices.map((price) => `Цена товара: ${price.toFixed(0)} ₽`);
    const list = document.querySelector('#prices-list');
    list.innerHTML = '';
    lines.forEach((line) => {
        const li = document.createElement('li');
        li.textContent = line;
        list.append(li);
    });
});

const filterTasks = [
    { id: 1, title: 'Сделать HTML', completed: true },
    { id: 2, title: 'Сделать CSS', completed: false },
    { id: 3, title: 'Сделать JS', completed: false },
];

function renderFilteredTasks(tasks) {
    const list = document.querySelector('#tasks-filter-list');
    list.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = `${task.title} — ${task.completed ? 'готово' : 'не готово'}`;
        list.append(li);
    });
}

document.querySelectorAll('[data-task-filter]').forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.taskFilter;
        if (filter === 'completed') renderFilteredTasks(filterTasks.filter((task) => task.completed));
        else if (filter === 'open') renderFilteredTasks(filterTasks.filter((task) => !task.completed));
        else renderFilteredTasks(filterTasks);
    });
});

const cart = [
    { title: 'Мышь', price: 1000, count: 2 },
    { title: 'Клавиатура', price: 3000, count: 1 },
    { title: 'Монитор', price: 15000, count: 1 },
];

function getCartSum(items) {
    let sum = 0;
    for (const item of items) sum += item.price * item.count;
    return sum;
}

function getCartCount(items) {
    let count = 0;
    for (const item of items) count += item.count;
    return count;
}

function getMostExpensive(items) {
    let expensive = items[0];
    for (const item of items) {
        if (item.price > expensive.price) expensive = item;
    }
    return expensive;
}

document.querySelector('#cart-button')?.addEventListener('click', () => {
    const list = document.querySelector('#cart-list');
    list.innerHTML = cart.map((item) => `<p>${item.title}: ${item.count} шт.</p>`).join('');
    document.querySelector('#cart-total').textContent = `Сумма: ${getCartSum(cart)} ₽, товаров: ${getCartCount(cart)}, самый дорогой: ${getMostExpensive(cart).title}`;
});
