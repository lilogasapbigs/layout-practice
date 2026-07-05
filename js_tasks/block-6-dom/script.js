'use strict';

document.querySelector('#change-title-button')?.addEventListener('click', () => {
    const title = document.querySelector('#change-title');
    if (title) title.textContent = 'Текст заголовка изменился';
});
