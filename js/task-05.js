const textInput = document.querySelector("#name-input");

const textOutput = document.querySelector("#name-output");

// function handleInput(event) {
//   const inputVal = event.target.value.trim();

//   textOutput.textContent = inputVal ? inputVal : "Anonymous";
// }

// const handleInput = (event) => {
//   const inputVal = event.target.value.trim();

//   textOutput.textContent = inputVal ? inputVal : "Anonymous";

//   return inputVal;
// };

textInput.addEventListener("input", handleInput);

function handleInput(event) {
  const inputVal = event.target.value.trim();

  textOutput.textContent = inputVal ? inputVal : "Anonymous";
}
