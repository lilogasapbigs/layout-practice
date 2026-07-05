'use strict';

let counter = 0;
document.querySelector('#counter-button')?.addEventListener('click', () => {
    counter += 1;
    document.querySelector('#counter-value').textContent = counter;
});
