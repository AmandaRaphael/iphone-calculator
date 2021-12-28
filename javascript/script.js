//DOM elements

const hour = document.querySelector(".hour");

const minute = document.querySelector(".minute");

const display = document.querySelector(".display");

const ac = document.querySelector(".ac");

const pm = document.querySelector(".pm");

const percent = document.querySelector(".percent");

const addition = document.querySelector(".addition");

const subtraction = document.querySelector(".subtraction");

const multiplication = document.querySelector(".multiplication");

const division = document.querySelector(".division");

const equal = document.querySelector(".equal");

const decimal = document.querySelector(".decimal");
const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
let clicked = ``;
number.forEach((num) => {
  num.addEventListener("click", function (e) {
    clicked += e.target.textContent;

    display.textContent = clicked;
  });
});

operator.forEach((operatorElement) => {
  operatorElement.addEventListener("click", function (e) {
    clicked += e.target.textContent;
    document.querySelector(".display").textContent = clicked;
  });
});
decimal.addEventListener("click", function () {
  let operandSymbols = `+*/-`;
  if (clicked[0] == 0) {
    clicked = 0 + `.`;

    document.querySelector(".display").textContent = clicked;
  } else if (clicked[0] !== 0 || operandSymbols.includes(clicked)) {
    clicked += `.`;

    document.querySelector(".display").textContent = clicked;
  }
});
equal.addEventListener("click", function () {
  let value = eval(clicked);
  clicked = value;
  document.querySelector(".display").textContent = clicked;
});

ac.addEventListener("click", function () {
  clicked = ``;
  document.querySelector(".display").textContent = 0;
});
percent.addEventListener("click", function () {
  let value = eval(clicked) / 100;
    clicked = value;
  document.querySelector(".display").textContent = value;
});
