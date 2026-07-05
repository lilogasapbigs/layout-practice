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
