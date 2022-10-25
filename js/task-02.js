const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulElm = document.querySelector("#ingredients");
const elements = [];
ingredients.forEach((ingrd) => {
  const liElm = document.createElement("li");
  liElm.classList.add("item");
  liElm.textContent = ingrd;
  elements.push(liElm);
});
ulElm.append(...elements);
