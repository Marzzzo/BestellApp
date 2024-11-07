function dishesTemplate(dishIndex) {
  let formattedPrice = `${myDishes[dishIndex].price.toFixed(2).replace(".", ",")} €`;
  return `<div class="dish_block">
                <div class="dish_container">
                    <h4>${myDishes[dishIndex].name}</h4>
                    <span>${myDishes[dishIndex].description}</span>
                    <span class="color_price">${formattedPrice}</span>
                </div>
                    <div><img id="dishes_to-basket" class="add_icon" src="./assets/icons/plus.png" onclick="addToBasket()"></div>
            </div>`;
}


function basketTemplate() {
  return ``
}
