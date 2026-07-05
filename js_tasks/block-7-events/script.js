'use strict';

let counter = 0;
document.querySelector('#counter-button')?.addEventListener('click', () => {
    counter += 1;
    document.querySelector('#counter-value').textContent = counter;
});

document.querySelector('#live-input')?.addEventListener('input', (event) => {
    document.querySelector('#live-output').textContent = event.target.value || 'Тут будет текст';
});

document.querySelector('#event-register')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const result = document.querySelector('#event-register-result');
    if (!name || !email) {
        result.textContent = 'Заполните имя и email';
    } else {
        result.textContent = `Пользователь: ${name}, ${email}`;
    }
});

const todos = [];
function renderTodos() {
    const list = document.querySelector('#todo-list');
    list.innerHTML = '';
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.innerHTML = `<label><input type="checkbox" data-id="${todo.id}" ${todo.done ? 'checked' : ''}> ${todo.title}</label> <button data-delete="${todo.id}" type="button">Удалить</button>`;
        list.append(li);
    });
    document.querySelector('#todo-stats').textContent = `Всего: ${todos.length}, выполнено: ${todos.filter((todo) => todo.done).length}`;
}
document.querySelector('#todo-add')?.addEventListener('click', () => {
    const input = document.querySelector('#todo-input');
    if (!input.value.trim()) return;
    todos.push({ id: Date.now(), title: input.value.trim(), done: false });
    input.value = '';
    renderTodos();
});
document.querySelector('#todo-list')?.addEventListener('click', (event) => {
    if (event.target.dataset.delete) {
        const index = todos.findIndex((todo) => todo.id === Number(event.target.dataset.delete));
        todos.splice(index, 1);
        renderTodos();
    }
    if (event.target.matches('input[type="checkbox"]')) {
        const todo = todos.find((item) => item.id === Number(event.target.dataset.id));
        todo.done = event.target.checked;
        renderTodos();
    }
});
renderTodos();

const delegationProducts = ['Мышь', 'Клавиатура', 'Монитор'];
const delegationContainer = document.querySelector('#delegation-products');
if (delegationContainer) {
    delegationContainer.innerHTML = delegationProducts.map((title) => `<article class="card" data-title="${title}"><h3>${title}</h3><button data-action="cart" type="button">В корзину</button><button data-action="remove" type="button">Удалить</button></article>`).join('');
    delegationContainer.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;
        const card = button.closest('.card');
        if (button.dataset.action === 'remove') card.remove();
        if (button.dataset.action === 'cart') document.querySelector('#delegation-message').textContent = `Добавлено: ${card.dataset.title}`;
    });
}

const eventProducts = [
    { title: 'Мышь', price: 1000, category: 'Периферия' },
    { title: 'Клавиатура', price: 3000, category: 'Периферия' },
    { title: 'Монитор', price: 15000, category: 'Техника' },
];
function renderEventCatalog() {
    const query = document.querySelector('#event-search').value.toLowerCase();
    const category = document.querySelector('#event-category').value;
    const sort = document.querySelector('#event-sort').value;
    let result = eventProducts.filter((product) => product.title.toLowerCase().includes(query) && (category === 'all' || product.category === category));
    result = [...result];
    if (sort === 'asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'desc') result.sort((a, b) => b.price - a.price);
    document.querySelector('#event-catalog').innerHTML = result.map((product) => `<article class="card"><h3>${product.title}</h3><p>${product.price} ₽</p></article>`).join('');
}
document.querySelector('#event-search')?.addEventListener('input', renderEventCatalog);
document.querySelector('#event-category')?.addEventListener('change', renderEventCatalog);
document.querySelector('#event-sort')?.addEventListener('change', renderEventCatalog);
renderEventCatalog();

const shopProducts = [
    { id: 1, title: 'Мышь', price: 1000 },
    { id: 2, title: 'Клавиатура', price: 3000 },
    { id: 3, title: 'Монитор', price: 15000 },
];
const shopCart = [];
function renderShopProducts() {
    document.querySelector('#shop-products').innerHTML = shopProducts.map((product) => `<article class="card"><h3>${product.title}</h3><p>${product.price} ₽</p><button data-id="${product.id}" type="button">В корзину</button></article>`).join('');
}
function renderShopCart() {
    document.querySelector('#shop-cart').innerHTML = shopCart.map((item) => `<div class="task-row">${item.title}: ${item.count} шт. <button data-remove="${item.id}" type="button">Удалить</button></div>`).join('');
    const total = shopCart.reduce((sum, item) => sum + item.price * item.count, 0);
    document.querySelector('#shop-total').textContent = `Итого: ${total} ₽`;
}
document.querySelector('#shop-products')?.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-id]');
    if (!button) return;
    const product = shopProducts.find((item) => item.id === Number(button.dataset.id));
    const cartItem = shopCart.find((item) => item.id === product.id);
    if (cartItem) cartItem.count += 1;
    else shopCart.push({ ...product, count: 1 });
    renderShopCart();
});
document.querySelector('#shop-cart')?.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-remove]');
    if (!button) return;
    const index = shopCart.findIndex((item) => item.id === Number(button.dataset.remove));
    shopCart.splice(index, 1);
    renderShopCart();
});
renderShopProducts();
renderShopCart();
