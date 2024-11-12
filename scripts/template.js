function dishesTemplate(dishIndex) {
  let formattedPrice = `${myDishes[dishIndex].price.toFixed(2).replace('.', ',')} €`;
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
  let formattedPrice = `${basketDishes[dishIndex].price.toFixed(2).replace('.', ',')} €`;
  return `            <div class= "box_shadow">    
                        <div>
                            <h4>${basketDishes[dishIndex].name}</h4>
                        </div>
                        <div class="amount_and_price">
                            <div class="basket_amount">
                                <img onclick="reduceDishByOne(${dishIndex})" class=icon_basket src="./assets/icons/minus.png">
                                <p id="dishAmount">${basketDishes[dishIndex].amount}x</p>
                                <img onclick="increaseDishByOne(${dishIndex})" class="icon_basket" src="./assets/icons/plus.png">
                            </div>
                            <div class="basket_price">
                                <span id="dishPrice" class="color_price">${formattedPrice}</span>
                                <img onclick="deleteBasket(${dishIndex})" class="trash" src="./assets/icons/trash.png">
                            </div>
                        </div>
                      </div>`;
}

function priceTemplate(totalPrice) {
  return `<h5>Gesamtpreis: <b>${totalPrice.toFixed(2).replace('.', ',')} €</b></h5>
            <button class="button" onclick="orderMessage()">Bestellen</button>`;
}

function orderTemplate() {
  return `<div class="order">
            <span>Die Testbestellung wurde erfolgreich aufgegeben.</span>
            </div>`;
}
