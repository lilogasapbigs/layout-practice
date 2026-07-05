'use strict';

const objectUser = { id: 1, name: 'Алексей', age: 25, email: 'alex@example.com', role: 'student' };
const objectUserContainer = document.querySelector('#object-user');
if (objectUserContainer) {
    objectUserContainer.innerHTML = `<article class="user-card"><h3>${objectUser.name}</h3><p>${objectUser.email}</p><p>${objectUser.age} лет, роль: ${objectUser.role}</p></article>`;
}

const nestedProduct = { title: 'Ноутбук', price: 70000, specs: { cpu: 'Intel Core i5', ram: '16 GB', storage: '512 GB SSD' } };
const nestedProductContainer = document.querySelector('#nested-product');
if (nestedProductContainer) {
    nestedProductContainer.innerHTML = `<article class="product-card"><h3>${nestedProduct.title}</h3><p>${nestedProduct.price} ₽</p><ul><li>${nestedProduct.specs.cpu}</li><li>${nestedProduct.specs.ram}</li><li>${nestedProduct.specs.storage}</li></ul></article>`;
}

const objectUsers = [
    { id: 1, name: 'Анна', email: 'anna@example.com', role: 'admin', active: true },
    { id: 2, name: 'Иван', email: 'ivan@example.com', role: 'user', active: false },
    { id: 3, name: 'Олег', email: 'oleg@example.com', role: 'user', active: true },
];
const objectUsersContainer = document.querySelector('#object-users');
if (objectUsersContainer) {
    objectUsers.forEach((user) => {
        const card = document.createElement('article');
        card.className = `user-card ${user.active ? 'active' : ''}`;
        card.innerHTML = `<h3>${user.name}</h3><p>${user.email}</p><p>${user.role}</p><strong>${user.active ? 'активен' : 'не активен'}</strong>`;
        objectUsersContainer.append(card);
    });
}

const destructuringUser = { name: 'Мария', email: 'maria@example.com', role: 'student' };
const { name, email, role } = destructuringUser;
// старый способ: destructuringUser.name, destructuringUser.email, destructuringUser.role
const destructuringResult = document.querySelector('#destructuring-result');
if (destructuringResult) {
    destructuringResult.textContent = `${name}, ${email}, ${role}`;
}
