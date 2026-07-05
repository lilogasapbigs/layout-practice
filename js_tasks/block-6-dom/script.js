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
