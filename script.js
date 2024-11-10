let totalPrice = 0;

function init() {
  renderDishesTemplate();
}

function renderDishesTemplate() {
  // Inserts the menus into the HTML.
  let dishesRef = document.getElementById('dishesSection');
  for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
    dishesRef.innerHTML += dishesTemplate(dishIndex);
  }
}

function renderBasket() {
  let basketSection = document.getElementById('basketSection');
  basketSection.innerHTML = '';
  for (let dishIndex = 0; dishIndex < basketDishes.length; dishIndex++) {
    basketSection.innerHTML += basketTemplate[dishIndex];
  }
  getTotalPrice();
}

// Gericht wird dem Warenkorb hinzugefügt.
function addToBasket(dishIndex) {
  let basketSection = document.getElementById('basketSection');
  let basketPlaceholder = document.getElementById('placeholder');
  basketPlaceholder.classList.add('d_none');
  let existingDishIndex = getIndexById(dishIndex);
  if (dishNoExist(existingDishIndex)) {
    basketDishes.push(myDishes[dishIndex]);
    basketSection.innerHTML += basketTemplate(basketDishes.length - 1);
  } else {
    increaseDishByOne(existingDishIndex);
  }
  getTotalPrice();
}

// Gericht wird im Warenkorb um 1 erhöt.
function increaseDishByOne(dishIndex) {
  basketDishes[dishIndex].amount += 1;
  let price = document.querySelectorAll('#dishPrice')[dishIndex];
  price.innerText = `${(basketDishes[dishIndex].price * basketDishes[dishIndex].amount).toFixed(2).replace('.', ',')} €`;
  let amount = document.querySelectorAll('#dishAmount')[dishIndex];
  amount.innerText = `${basketDishes[dishIndex].amount}x`;
  getTotalPrice();
}

// Gericht wird um 1 reduziert.
function reduceDishByOne(dishIndex) {
  if (basketDishes[dishIndex].amount > 1) {
    basketDishes[dishIndex].amount -= 1;
    let price = document.querySelectorAll('#dishPrice')[dishIndex];
    price.innerText = `${(basketDishes[dishIndex].price * basketDishes[dishIndex].amount).toFixed(2).replace('.', ',')} €`;
    let amount = document.querySelectorAll('#dishAmount')[dishIndex];
    amount.innerText = `${basketDishes[dishIndex].amount}x`;
    getTotalPrice();
  }
}

function getTotalPrice() {
  let totalPrice = 0;
  for (let dishIndex = 0; dishIndex < basketDishes.length; dishIndex++) {
    totalPrice += basketDishes[dishIndex].price * basketDishes[dishIndex].amount;
  }
  let priceSection = document.getElementById('priceSection');
  priceSection.innerHTML = priceTemplate(totalPrice);
  if (totalPrice === 0) priceSection.classList.add('d_none');
}

function getIndexById(dishIndex) {
  return basketDishes.findIndex((dish) => dish.id === myDishes[dishIndex].id);
}

function dishNoExist(existingDishIndex) {
  return existingDishIndex === -1;
}

function deleteBasket(dishIndex) {
  basketDishes.splice(dishIndex, 1);
  renderBasket();
}

function basketIsEmpty() {
  let basketPlaceholder = document.getElementById('placeholder');
  if (basketDishes.length === 0) {
    basketPlaceholder.classList.remove('d_none');
  } else {
    basketPlaceholder.classList.add('d_none');
  }
}
