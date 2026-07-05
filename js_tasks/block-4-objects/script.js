'use strict';

const objectUser = { id: 1, name: 'Алексей', age: 25, email: 'alex@example.com', role: 'student' };
const objectUserContainer = document.querySelector('#object-user');
if (objectUserContainer) {
    objectUserContainer.innerHTML = `<article class="user-card"><h3>${objectUser.name}</h3><p>${objectUser.email}</p><p>${objectUser.age} лет, роль: ${objectUser.role}</p></article>`;
}
