const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const counter = document.querySelector(".counter");

addButton.addEventListener("click", () => {
  counter.innerText = Number(counter.innerText) + 1;
});

subtractButton.addEventListener("click", () => {
  counter.innerText = Number(counter.innerText) - 1;
});

console.log("oi")

console.log("segundo console.log")