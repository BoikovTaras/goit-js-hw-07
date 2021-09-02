const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientEl = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  return liEl;
});
console.log(ingredientEl);

const ulEl = document.querySelector('#ingredients');
ulEl.append(...ingredientEl);
console.log(ulEl);