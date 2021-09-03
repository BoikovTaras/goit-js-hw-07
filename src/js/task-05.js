const nameEl = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', inputArea);
function inputArea() {
    let value = inputEl.value;
    if (value === "") {
        nameEl.textContent = "незнакомец";
    } else {
        nameEl.textContent = value;
    };
};