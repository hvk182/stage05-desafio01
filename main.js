const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnOpen = document.querySelector("#btnOpen");
const btnReset = document.querySelector("#btnReset");

btnOpen.addEventListener("click", handleOpenClick);
btnReset.addEventListener("click", handleResetClick);

function handleOpenClick(e) {
  e.preventDefault();
  screenToggle();
}

function handleResetClick(e) {
  e.preventDefault();
  screenToggle();
}

function screenToggle() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
