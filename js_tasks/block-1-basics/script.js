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

const discountButton = document.querySelector('#discount-button');

if (discountButton) {
    discountButton.addEventListener('click', () => {
        const price = Number(document.querySelector('#discount-price').value);
        const discount = Number(document.querySelector('#discount-percent').value);
        const result = document.querySelector('#discount-result');

        if (!Number.isFinite(price) || !Number.isFinite(discount) || price < 0 || discount < 0 || discount > 100) {
            result.textContent = 'Введите корректную цену и скидку';
            return;
        }

        const finalPrice = price - (price * discount / 100);
        result.textContent = `Итоговая цена: ${finalPrice.toFixed(0)} ₽`;
    });
}
