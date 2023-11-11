const categoriesElements = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesElements.length);

categoriesElements.forEach((el) => {
  const categoryName = el.firstElementChild.textContent;
  console.log("Category:", categoryName);

  const categoryEl = el.lastElementChild;
  const categoryLength = categoryEl.children.length;
  console.log("Elements:", categoryLength);
});
