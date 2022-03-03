function insertTerm(term) {
  const expression = document.querySelector('.expression');
  const input = expression.value.replace(/^0+/, '');
  expression.value = input + term;
}
function clearInput() {
  document.querySelector('.expression').value = "";
}
function calculate() {
  const result = document.querySelector('.expression');
  const input = result.value;
  if (isNaN(eval(input)) || eval(input) === Infinity || eval(input) === -Infinity) {
    result.value = "Operacao Negada";
  } else {
    result.value = eval(input);
  }
  if (result.value.length >= 5)
    result.classList.add("text-small");
}
function percent() {
  const result = document.querySelector('.expression');
  const input = result.value;
  result.value = input / 100;
}
function invertSign() {
  calculate()
  const input = document.querySelector('.expression');
  input.value = input.value * -1;
}
function backSpace() {
  const result = document.querySelector('.expression');
  const input = result.value;
  result.value = input.replace(/.$/, '');;
}
function inverse() {
  const result = document.querySelector('.expression');
  const input = result.value;
  result.value = 1 / input;
}
function square() {
  const result = document.querySelector('.expression');
  const input = result.value;
  result.value = Math.pow(input, 2);
}
function squareRoot() {
  const result = document.querySelector('.expression');
  const input = result.value;
  result.value = Math.pow(input, 1 / 2);
}