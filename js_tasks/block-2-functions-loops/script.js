'use strict';

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) {
        return 'На ноль делить нельзя';
    }
    return a / b;
}

function calculate(a, b, operation) {
    if (operation === 'add') return add(a, b);
    if (operation === 'subtract') return subtract(a, b);
    if (operation === 'multiply') return multiply(a, b);
    if (operation === 'divide') return divide(a, b);
    return 'Неизвестная операция';
}

const calcButton = document.querySelector('#calc-button');
if (calcButton) {
    calcButton.addEventListener('click', () => {
        const a = Number(document.querySelector('#calc-a').value);
        const b = Number(document.querySelector('#calc-b').value);
        const operation = document.querySelector('#calc-operation').value;
        document.querySelector('#calc-result').textContent = `Результат: ${calculate(a, b, operation)}`;
    });
}

function createMultiplicationTable(number) {
    const lines = [];
    for (let i = 1; i <= 10; i++) {
        lines.push(`${number} × ${i} = ${number * i}`);
    }
    return lines;
}

const multiplyButton = document.querySelector('#multiply-button');
if (multiplyButton) {
    multiplyButton.addEventListener('click', () => {
        const number = Number(document.querySelector('#multiply-number').value);
        const result = document.querySelector('#multiply-result');
        result.innerHTML = '';

        createMultiplicationTable(number).forEach((line) => {
            const div = document.createElement('div');
            div.textContent = line;
            result.append(div);
        });
    });
}

const generatedProducts = ['Ноутбук', 'Мышь', 'Клавиатура', 'Монитор'];

function createProductCard(title) {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3>${title}</h3><p>Товар из массива</p>`;
    return card;
}

const renderProductsButton = document.querySelector('#render-products-button');
if (renderProductsButton) {
    renderProductsButton.addEventListener('click', () => {
        const container = document.querySelector('#products-container');
        container.innerHTML = '';
        for (const product of generatedProducts) {
            container.append(createProductCard(product));
        }
    });
}
