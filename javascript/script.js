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

const del = document.querySelector(".del");

let clicked = ``;
let result = 0;
let decimalCount = 0;
const operandSymbols = `+*/-`;
function displayClicked(e) {
  clicked += e.target.textContent;
  display.textContent = clicked;
}
//numbers
number.forEach((num) => {
  num.addEventListener("click", function (e) {
    if (result !== 0) {
      result = 0;
      clicked = ``;
    }
    displayClicked(e);
  });
});
//operator
operator.forEach((operatorElement) => {
  operatorElement.addEventListener("click", function (e) {
    decimalCount = 0;
    result = 0;
    displayClicked(e);
  });
});
//decimal
decimal.addEventListener("click", function () {
  
  if (clicked[clicked.length - 1] == 0) {
    clicked = 0 + `.`;
    display.textContent = clicked;
    decimalCount += 1;
  }
  if (decimalCount === 0) {
    clicked += `.`;
    display.textContent = clicked;
      decimalCount += 1;
  }
 
});
//equal
equal.addEventListener("click", function () {

  result = eval(clicked);
  clicked = result;
  display.textContent = clicked;
});
//ac
ac.addEventListener("click", function () {
  clicked = ``;
  display.textContent = 0;
});
//percent
percent.addEventListener("click", function () {
  result = eval(clicked) / 100;
  clicked = result.toFixed(4);
  display.textContent = clicked;
});
//squareRoot
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
//del
del.addEventListener("click", function () {
  clicked = clicked.slice(0, -1);
  display.textContent = clicked;
})