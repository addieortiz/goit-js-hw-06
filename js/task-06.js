const inputValidation = document.getElementById("validation-input");

inputValidation.addEventListener("blur", handleBlur);

function handleBlur(event) {
  const dataLength = parseInt(inputValidation.getAttribute("data-length"));
  const actualLength = inputValidation.value.trim().length;

  if (dataLength === actualLength) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
  }
}

//   input.classList.toggle("valid", dataLength === actualLength);
//   input.classList.toggle("invalid", dataLength !== actualLength);

// function handleBlur(event) {
//   const dataLength = inputValidation.getAttribute("data-length");
//   const actualLength = inputValidation.value.trim().length.toString();

//   if (dataLength === actualLength) {
//     inputValidation.classList.add("valid");
//     inputValidation.classList.remove("invalid");
//   } else {
//     inputValidation.classList.add("invalid");
//     inputValidation.classList.remove("valid");
//   }
// }
