function init() {
  renderDishesTemplate();
}

function renderDishesTemplate() {
  // Inserts the menus into the HTML.
  let contentRef = document.getElementById("dishesSection");
  for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
    contentRef.innerHTML += dishesTemplate(dishIndex);
  }
}

function addToBasket(dishIndex) {
  let basketSection = document.getElementById("basketSection");

  basketDishes.push(myDishes[dishIndex]);

  basketSection.innerHTML += basketTemplate(basketDishes.length -1);
}
