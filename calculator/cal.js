const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function sum() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = "";
}
