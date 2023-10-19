let userInput = '';
let savedOperator = '';
let savedNumber = '';

function appendNumber(number) {
  userInput += number;
  document.getElementById('result').value = userInput;
}

function clearInput() {
  userInput = '';
  document.getElementById('result').value = '';
}

function calculate(operator) {
  savedOperator = operator;
  savedNumber = userInput;
  clearInput();
}

function compute() {
  let result;
  const number = parseFloat(userInput);

  if (savedOperator === '+') {
    result = parseFloat(savedNumber) + number;
  } else if (savedOperator === '-') {
    result = parseFloat(savedNumber) - number;
  } else if (savedOperator === '*') {
    result = parseFloat(savedNumber) * number;
  } else if (savedOperator === '/') {
    result = parseFloat(savedNumber) / number;
  } else if (savedOperator === '%') {
    result = parseFloat(savedNumber) % number;
  } else if (savedOperator === '^') {
    result = Math.pow(parseFloat(savedNumber), 2);
  }

  if (Number.isFinite(result)) {
    userInput = result.toString();
    document.getElementById('result').value = userInput;
  } else {
    clearInput();
    alert('Error: Division by zero not allowed!');
  }

  savedOperator = '';
  savedNumber = '';
}
