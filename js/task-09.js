function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const refs = {
  colorText: document.querySelector(".widget  .color"),
  changeButton: document.querySelector(".widget > .change-color"),
};

refs.changeButton.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.colorText.textContent = color;
});
