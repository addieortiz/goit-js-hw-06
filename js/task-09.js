const changeColor = document.querySelector(".change-color");

const spanColor = document.querySelector(".color");

changeColor.addEventListener("click", getNewColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getNewColor(event) {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  spanColor.textContent = randomColor;
}
