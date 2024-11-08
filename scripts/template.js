function dishesTemplate(dishIndex) {
  let formattedPrice = `${myDishes[dishIndex].price
    .toFixed(2)
    .replace(".", ",")} €`;
  return `<div class="dish_block">
                <div class="dish_container">
                    <h4>${myDishes[dishIndex].name}</h4>
                    <span>${myDishes[dishIndex].description}</span>
                    <span class="color_price">${formattedPrice}</span>
                </div>
                    <div><img id="dishes_to-basket" class="add_icon" src="./assets/icons/plus.png" onclick="addToBasket(${dishIndex})"></div>
            </div>`;
}

function basketTemplate(dishIndex) {
  let formattedPrice = `${basketDishes[dishIndex].price
    .toFixed(2)
    .replace(".", ",")} €`;
  return `            <div class= "box_shadow">    
                        <div>
                            <h4>${basketDishes[dishIndex].name}</h4>
                        </div>
                        <div class="amount_and_price">
                            <div class="basket_amount">
                                <img class=icon_basket src="./assets/icons/minus.png">
                                <p>${basketDishes[dishIndex].amount}x</p>
                                <img class=icon_basket src="./assets/icons/plus.png" alt="">
                            </div>
                            <div class="basket_price">
                                <span class="color_price">${formattedPrice}</span>
                                <img class="trash" src="./assets/icons/trash.png" alt="">
                            </div>
                        </div>
                      </div>`;
}
