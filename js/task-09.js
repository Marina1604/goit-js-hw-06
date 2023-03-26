const body = document.querySelector("body");
const span = document.querySelector(".color");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
    body.style.backgroundColor = getRandomHexColor();
    span.textContent = body.style.backgroundColor;
  });
