const controler = document.querySelector("#font-size-control");
const textEl = document.querySelector('#text');
controler.addEventListener('input', controlSize => {
    controlSize.preventDefault();
    textEl.style.fontSize = `${controler.value}px`;
});

