'use strict';

const nameInput = document.querySelector('#name-input');
const greetButton = document.querySelector('#greet-button');
const greetResult = document.querySelector('#greet-result');

if (greetButton) {
    greetButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        greetResult.textContent = name ? `Привет, ${name}!` : 'Введите имя';
    });
}
