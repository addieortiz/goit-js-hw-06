const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsList = document.getElementById("ingredients");

// ingredients.forEach((element) => {
//   const elementList = document.createElement("li");
//   elementList.textContent = element;
//   elementList.classList.add("item");
//   ingredientsList.append(elementList);
// });

const ingredientsList = document.getElementById("ingredients");

const ingredientsNew = ingredients.map((ingredient) => {
  const elementList = document.createElement("li");
  elementList.textContent = ingredient;
  elementList.classList.add("item");
  return elementList;
});

ingredientsList.append(...ingredientsNew);
