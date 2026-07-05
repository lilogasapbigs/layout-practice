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
