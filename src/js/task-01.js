const itemsEl = document.querySelectorAll('.item');
console.log('В списке', itemsEl.length, 'категории');
for (let i = 0; i < itemsEl.length; i++) {
    let item = itemsEl[i];
    console.log('Категория:', item.firstElementChild.textContent);
    console.log('Количество элементов:', item.lastElementChild.children.length);
}