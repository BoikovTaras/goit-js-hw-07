// Создаю ссылки на кнопки и окно ввода
const refs = {
    renderEl: document.querySelector('[data-action ="render"]'),
    destroyEl: document.querySelector('[data-action ="destroy"]'),
    inputEl: document.querySelector('input'),
    divBox: document.querySelector('#boxes'),
};

refs.renderEl.addEventListener('click',()=>  createBoxes(refs.inputEl.value));

function createBoxes(value) {
    let newBoxes = [];
    for (let i = 0; i < value; i += 1) {
        const newBox = document.createElement('div');
        newBox.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        newBox.style.width = `${ 30 + i * 10 }px`;
        newBox.style.height = `${ 30 + i * 10 }px`;
        newBoxes.push(newBox);
    }
    boxes.append(...newBoxes);
}

refs.destroyEl.addEventListener('click', () => destroyBoxes());
function destroyBoxes() {
        boxes.innerHTML = '';
};



// refs.renderEl.addEventListener('click', () => createBoxes(refs.divBox.value));
// // refs.destroyEl.addEventListener('click', onDestroyList);
// // refs.inputEl.addEventListener('input', onInputValue);
// let amount = refs.divBox.value;
// function createBoxes(amount) {
//     const arr = [];
//     let widthBoxes = 30;
//     let heigthBoxes = 30;
//     const stepBoxes = 10;
//     for (let i = 0; i < amount; i += 1) {
//         arr.push(document.createElement('div'));
//         arr[i].style.width = widthBoxes + "px";
//         arr[i].style.heigth = heigthBoxes + "px";
//         arr[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;

//     };
//     refs.divBox.appendChild('arr');
// }




// // function getRGB() {
// //     const r = Math.floor(Math.random() * 255 + 1);
// //     const b = Math.floor(Math.random() * 255 + 1);
// //     const g = Math.floor(Math.random() * 255 + 1);
// //     return [r, g, b];
// // };

// // // Создаем функцию создания элементов div


// // const divEl = document.createElement('div');
// // divEl.style.preventDefault();
// // divEl.style.backgroundColor = rbg(255, 255, 144);
// // divEL.style.width ="30px";
// // divEl.style.height ="30px";


// // function onCreateList(inputEl) {
// //     refs.divBox.appendChild(divEl);
// // };


// // function onDestroyList() {
// //     refs.divBox.removeChild(divEl);
// // }