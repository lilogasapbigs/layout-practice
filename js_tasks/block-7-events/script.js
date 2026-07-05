'use strict';

let counter = 0;
document.querySelector('#counter-button')?.addEventListener('click', () => {
    counter += 1;
    document.querySelector('#counter-value').textContent = counter;
});

document.querySelector('#live-input')?.addEventListener('input', (event) => {
    document.querySelector('#live-output').textContent = event.target.value || 'Тут будет текст';
});
