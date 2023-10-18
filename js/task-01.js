const numberCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberCategories}`);
const list = document.querySelector('#categories');
const itemElements = document.querySelectorAll('.item');

const firstListItem = list.firstElementChild;
const lastListItem = list.lastElementChild;

itemElements.forEach(itemElement => {
  const titleText = itemElement.querySelector('h2').textContent;
  const liElements = itemElement.querySelectorAll('ul li').length;
  console.log(`Category: ${titleText}
Elements: ${liElements}`);
});
