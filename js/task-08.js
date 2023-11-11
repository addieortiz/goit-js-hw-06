const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleForm);

let formData;

function handleForm(event) {
  // prevent from reloading and submission default
  event.preventDefault();

  // get form elements
  const email = loginForm.elements.email;
  const password = loginForm.elements.password;

  // not empty field, collect field values
  if (email.value.trim() === "" || password.value.trim() === "") {
    // empty fields
    alert("All fields must be filled in.");
  } else {
    formData = {
      email: email.value,
      password: password.value,
    };
  }

  // Display object with entered data from complete form input
  console.log(formData);

  // Clear form once submitted
  loginForm.reset();
}
