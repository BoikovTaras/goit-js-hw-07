const counterValue = document.querySelector('#value');
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

let valueEl = 0;

const decrement = () => (counterValue.textContent = valueEl -= 1);
const increment = () => (counterValue.textContent = valueEl += 1);


decrementEl.addEventListener("click", decrement);
incrementEl.addEventListener("click", increment);