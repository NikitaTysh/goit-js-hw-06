const catElm = document.querySelectorAll(".item ");
console.log(`Number of categories: ${catElm.length}`);
catElm.forEach((element) => {
  const catItemElm = element.querySelectorAll("ul li");
  const catNameElm = element.querySelectorAll("h2");
  catNameElm.forEach((element) => {
    console.log(`Category: ${element.textContent}`);
    console.log(`Elements : ${catItemElm.length} `);
  });
});
