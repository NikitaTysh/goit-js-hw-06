const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElm = document.querySelector("#ingredients");
const el = ingredients.map((el) => `<li class="item">${el}</li>`).join("");
ulElm.innerHTML = el;
