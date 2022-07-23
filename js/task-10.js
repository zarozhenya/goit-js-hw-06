function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  input: controls.querySelector("input"),
  createButton: controls.querySelector("button[data-create]"),
  destroyButton: controls.querySelector("button[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

const createBox = ({ boxSize, color }) => {
  const box = document.createElement("div");
  box.style.width = `${boxSize}px`;
  box.style.height = `${boxSize}px`;
  box.style.backgroundColor = `${color}`;
  return box;
};

const createBoxes = (amount) => {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const currentColor = getRandomHexColor();
    boxes.push(createBox({ boxSize: size, color: currentColor }));
    size += 10;
  }
  refs.boxesContainer.append(...boxes);
};

const destroyBoxes = () => {
  refs.boxesContainer.innerHTML = "";
};

refs.createButton.addEventListener("click", () => {
  createBoxes(Number.parseInt(refs.input.value));
  refs.input.value = "";
});

refs.destroyButton.addEventListener("click", destroyBoxes);
