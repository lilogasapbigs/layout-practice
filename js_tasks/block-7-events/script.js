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
