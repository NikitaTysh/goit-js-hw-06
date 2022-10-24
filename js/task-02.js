const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElm = document.querySelector("#ingredients");
ingredients.forEach((n)=>{
  const el = document.createElement('li')
  el.classList = 'item'
  el.textContent = n
  ulElm.append(el)
})

  
