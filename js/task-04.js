let counterValue = 0;

const btnDec = document.querySelector('[data-action = "decrement"]');

const btnInc = document.querySelector('[data-action="increment"]');

const valueClicks = document.getElementById("value");

btnDec.addEventListener("click", decrementClick);

function decrementClick(event) {
  counterValue--;
  valueClicks.textContent = counterValue;
}

btnInc.addEventListener("click", incrementClick);

function incrementClick(event) {
  counterValue++;
  valueClicks.textContent = counterValue;
}
