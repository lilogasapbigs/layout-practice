'use strict';

document.querySelector('#change-title-button')?.addEventListener('click', () => {
    const title = document.querySelector('#change-title');
    if (title) title.textContent = 'Текст заголовка изменился';
});

document.querySelector('#active-card-button')?.addEventListener('click', () => {
    document.querySelector('#active-card')?.classList.toggle('active');
});
