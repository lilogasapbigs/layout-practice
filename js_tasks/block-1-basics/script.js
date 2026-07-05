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

const ageButton = document.querySelector('#age-button');

if (ageButton) {
    ageButton.addEventListener('click', () => {
        const value = document.querySelector('#age-input').value;
        const age = Number(value);
        const result = document.querySelector('#age-result');

        if (value === '' || !Number.isFinite(age) || age < 0) {
            result.textContent = 'Введите корректный возраст';
        } else if (age < 18) {
            result.textContent = 'Доступ запрещён';
        } else if (age < 60) {
            result.textContent = 'Доступ разрешён';
        } else {
            result.textContent = 'Льготная категория';
        }
    });
}

const registerForm = document.querySelector('#register-form');

if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.querySelector('#register-name').value.trim();
        const email = document.querySelector('#register-email').value.trim();
        const password = document.querySelector('#register-password').value.trim();
        const result = document.querySelector('#register-result');

        if (!name) {
            result.textContent = 'Введите имя';
        } else if (!email) {
            result.textContent = 'Введите email';
        } else if (!password) {
            result.textContent = 'Введите пароль';
        } else {
            result.textContent = 'Форма заполнена правильно';
        }
    });
}

const productPriceButton = document.querySelector('#product-price-button');

if (productPriceButton) {
    productPriceButton.addEventListener('click', () => {
        const value = document.querySelector('#product-price').value;
        const price = Number(value);
        const result = document.querySelector('#product-price-result');

        if (value === '' || !Number.isFinite(price) || price < 0) {
            result.textContent = 'Ошибка цены';
        } else if (price === 0) {
            result.textContent = 'Бесплатно';
        } else if (price < 1000) {
            result.textContent = 'Дешёвый товар';
        } else if (price <= 10000) {
            result.textContent = 'Обычный товар';
        } else {
            result.textContent = 'Дорогой товар';
        }
    });
}

const toggleButton = document.querySelector('#toggle-button');
let isEnabled = false;

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        isEnabled = !isEnabled;
        const state = document.querySelector('#toggle-state');
        state.textContent = isEnabled ? 'Включено' : 'Выключено';
        state.classList.toggle('state-on', isEnabled);
        state.classList.toggle('state-off', !isEnabled);
    });
}
