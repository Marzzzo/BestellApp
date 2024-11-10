function init() {
  renderDishesTemplate();
}

function renderDishesTemplate() {
  // Inserts the menus into the HTML.
  let contentRef = document.getElementById('dishesSection');
  for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
    contentRef.innerHTML += dishesTemplate(dishIndex);
  }
}

// Gericht wird dem Warenkorb hinzugefügt.
function addToBasket(dishIndex) {
  let basketSection = document.getElementById('basketSection');
  let basketPlaceholder = document.getElementById('placeholder');
  basketPlaceholder.classList.add('d_none');
  basketDishes.push(myDishes[dishIndex]);

  basketSection.innerHTML += basketTemplate(basketDishes.length - 1);
}

// Gericht wird im Warenkorb um 1 erhöt.
function increaseDishByOne(dishIndex) {
  basketDishes[dishIndex].amount += 1;
  let price = document.querySelectorAll('#dishPrice')[dishIndex];
  price.innerText = `${(basketDishes[dishIndex].price * basketDishes[dishIndex].amount).toFixed(2).replace('.', ',')} €`;
  let amount = document.querySelectorAll('#dishAmount')[dishIndex];
  amount.innerText = `${basketDishes[dishIndex].amount}x`;
}

// Gericht wird um 1 reduziert.
function reduceDishByOne(dishIndex) {
  if (basketDishes[dishIndex].amount > 1) {
    basketDishes[dishIndex].amount -= 1;
    let price = document.querySelectorAll('#dishPrice')[dishIndex];
    price.innerText = `${(basketDishes[dishIndex].price * basketDishes[dishIndex].amount).toFixed(2).replace('.', ',')} €`;
    let amount = document.querySelectorAll('#dishAmount')[dishIndex];
    amount.innerText = `${basketDishes[dishIndex].amount}x`;
  }
}
