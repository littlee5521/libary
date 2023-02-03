const overlayButton = document.querySelector(".hero__button");

const addBookButton = document.querySelector(".overlay__button");

const overlay = document.querySelector(".overlay");

let isHidden = 0;

overlayButton.addEventListener("click", () => {
  if (isHidden == 0) {
    overlay.style.visibility = "visible";
  }
});

addBookButton.addEventListener("click", () => {
  overlay.style.visibility = "hidden";
});
