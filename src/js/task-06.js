const inputArea = document.querySelector("#validation-input");
const inputLength = inputArea.dataset.length;
inputArea.addEventListener('blur', invalidArea);


function invalidArea() {
    let value = inputArea.value;
    if (Number(inputLength) === value.length) {
        inputArea.classList.remove('invalid');
        inputArea.classList.add('valid');
    } else {
        inputArea.classList.remove('valid');
        inputArea.classList.add('invalid');
    }
};
