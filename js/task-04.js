const refs = {
  buttonDec: document.querySelector('[data-action="decrement"]'),
  buttonInc: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

const updateUI = () => {
  refs.value.textContent = counterValue;
};

refs.buttonDec.addEventListener("click", () => {
  counterValue -= 1;
  updateUI();
});

refs.buttonInc.addEventListener("click", () => {
  counterValue += 1;
  updateUI();
});
