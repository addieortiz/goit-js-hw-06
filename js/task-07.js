const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", fsizeControl);

function fsizeControl(event) {
  const fontSize = fontSizeControl.value + "px";

  textSpan.style.fontSize = fontSize;
}
