const container = document.querySelector(".container");

console.log(container);

const renderUI = () => {
  container.innerHTML = `
    <h1>Hello World</h1>
    <button>Click me</button>
    `;

  const button = document.querySelector("button");
  
  button.addEventListener("click", () => {
    alert("Hi there!");
  });
};

renderUI();



function greet(name) {
  console.log(`Hello ${name}`); // vanilla js //Typescript
}