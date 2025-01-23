//find out how to showcase num1 after the equation and to continue

let num1 = "";
let num2 = "";
let opp = "";
let opRecent = false;
let percentOp = false;
let switchOp = false;

const buttons = document.querySelectorAll(".btn-pad .btn");
const display = document.querySelector(".display");

function add(num1, num2) {
  let result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function percent(num1) {
  return num1 * 0.01;
}

function sign(num1) {
  return num1 * -1;
}

function clear() {
  console.log("test 1");
  num1 = 0;
  num2 = 0;
  opp = "";
  opRecent = false;
  percentOp = false;
  switchOp = false;
  display.textContent = "0";
  console.log("test 2");
}

function operate(num1, op, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return percent(num1);
    case "+/-":
      return sign(num1);
    case "AC":
      console.log("here");
      clear();
      break;
    default:
      break;
  }
}

function makeFloat(num1, num2) {}

function logFirst(number) {
  switch (number) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      num1 += number;
      display.textContent = num1;
      break;
    default:
      break;
  }
}
function logSecond(number) {
  switch (number) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      num2 += number;
      display.textContent = num2;
      break;
    default:
      break;
  }
}

function isOperator(number, numb1, op, numb2) {
  switch (number) {
    case "*":
    case "/":
    case "-":
    case "+":
      opRecent = true;
      opp = number;
      break;
    case "%":
      if (percentOp == false) {
        num1 = parseFloat(numb1);
        num1 = operate(numb1, number);
        display.textContent = num1;
        percentOp = true;
      } else {
        num2 = parseFloat(numb2);
        num2 = operate(numb2, number);
        display.textContent = num2;
      }
      break;
    case "+/-":
      if (switchOp == false) {
        num1 = parseFloat(num1);
        num1 = operate(num1, number);
        display.textContent = num1;
      } else {
        num2 = parseFloat(num2);
        num2 = operate(num2, number);
        display.textContent = num2;
      }
      break;
    case "AC":
      operate(0, number);
      break;
    case "=":
      num1 = parseFloat(numb1);
      num2 = parseFloat(numb2);

      num1 = operate(num1, op, num2);

      display.textContent = num1;
      num2 = "";
      opRecent = false;
      equal = true;
      break;
    default:
      break;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let number;
    if (!isNaN(parseFloat(button.textContent))) {
      number = parseFloat(button.textContent);
    } else {
      number = button.textContent;
    }
    isOperator(number, num1, opp, num2);
    if (opRecent == false) {
      switchOp = false;
      logFirst(number);
    } else if (opRecent == true) {
      switchOp = true;
      logSecond(number);
    }
  });
});
