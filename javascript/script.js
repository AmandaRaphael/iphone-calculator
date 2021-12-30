//DOM elements

const hour = document.querySelector(".hour");

const minute = document.querySelector(".minute");

const display = document.querySelector(".display");

const ac = document.querySelector(".ac");

const squareRoot = document.querySelector(".squareRoot");

const percent = document.querySelector(".percent");

const equal = document.querySelector(".equal");

const decimal = document.querySelector(".decimal");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
let clicked = ``;
let result = 0;
const operandSymbols = `+*/-`;
function displayClicked(e) {
  clicked += e.target.textContent;
  display.textContent = clicked;
}
number.forEach((num) => {
  num.addEventListener("click", function (e) {
    if (result !== 0) {
      result = 0;
      clicked = ``;
    }
    displayClicked(e);
  });
});

operator.forEach((operatorElement) => {
  operatorElement.addEventListener("click", function (e) {
    result = 0;
    displayClicked(e);
  });
});
decimal.addEventListener("click", function () {
  if (clicked[0] == 0) {
    clicked = 0 + `.`;
    display.textContent = clicked;
  } else if (clicked[0] !== 0 || operandSymbols.includes(clicked)) {
    clicked += `.`;
    display.textContent = clicked;
  }
});
equal.addEventListener("click", function () {
  result = eval(clicked);
  clicked = result;
  display.textContent = clicked;
});

ac.addEventListener("click", function () {
  clicked = ``;
  display.textContent = 0;
});
percent.addEventListener("click", function () {
  value = eval(clicked) / 100;
  clicked = value.toFixed(4);
  display.textContent = clicked;
});
squareRoot.addEventListener("click", function () {
  let squareRootValue = 0;
  if (squareRootValue === 0) {
    squareRootValue = Math.sqrt(eval(clicked)).toFixed(2);
    value = squareRootValue;
    clicked = ``;
  }
  if (squareRootValue !== 0 && !operandSymbols.includes(clicked)) {
    value = Math.sqrt(eval(squareRootValue)).toFixed(2);
  } else {
    squareRootValue = Math.sqrt(eval(clicked)).toFixed(2);
  }
  clicked = value;
  display.textContent = clicked;
});
