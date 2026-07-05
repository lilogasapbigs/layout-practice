'use strict';

document.querySelector('#change-title-button')?.addEventListener('click', () => {
    const title = document.querySelector('#change-title');
    if (title) title.textContent = 'Текст заголовка изменился';
});

document.querySelector('#active-card-button')?.addEventListener('click', () => {
    document.querySelector('#active-card')?.classList.toggle('active');
});

document.querySelector('#create-item-button')?.addEventListener('click', () => {
    const input = document.querySelector('#create-item-input');
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.textContent = text;
    document.querySelector('#created-list').append(li);
    input.value = '';
});

document.querySelectorAll('#remove-list button').forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('li').remove();
    });
});

const domCatalogProducts = [
    { title: 'Мышь', price: 1000 },
    { title: 'Клавиатура', price: 3000 },
];
function renderDomCatalog() {
    const container = document.querySelector('#dom-catalog');
    container.innerHTML = '';
    domCatalogProducts.forEach((product) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `<h3>${product.title}</h3><p>${product.price} ₽</p>`;
        container.append(card);
    });
}
document.querySelector('#dom-catalog-button')?.addEventListener('click', renderDomCatalog);

const modalOverlay = document.querySelector('#modal-overlay');
document.querySelector('#modal-open')?.addEventListener('click', () => modalOverlay.classList.add('open'));
document.querySelector('#modal-close')?.addEventListener('click', () => modalOverlay.classList.remove('open'));
modalOverlay?.addEventListener('click', (event) => {
    if (event.target === modalOverlay) modalOverlay.classList.remove('open');
});

const domTableUsers = [
    { name: 'Анна', email: 'anna@example.com', role: 'admin' },
    { name: 'Иван', email: 'ivan@example.com', role: 'user' },
];
function renderDomTable() {
    const tbody = document.querySelector('#dom-table-body');
    tbody.innerHTML = '';
    domTableUsers.forEach((user) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${user.name}</td><td>${user.email}</td><td>${user.role}</td>`;
        tbody.append(tr);
    });
}
renderDomTable();
