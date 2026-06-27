const heading = document.querySelector("h1");

const changeTextBtn = document.getElementById("changeText");
const defaultTextBtn = document.getElementById("defaultText");

changeTextBtn.style.backgroundColor = "blue";
changeTextBtn.style.color = "white";
changeTextBtn.style.height = "50px";

changeTextBtn.addEventListener("click", () => {
  heading.textContent = "Welcome to the Student Portal";
});

defaultTextBtn.addEventListener("click", () => {
  heading.textContent = "Welcome to Lesson 5";
});
