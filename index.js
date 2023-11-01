const result = document.getElementById("result");

function append(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
  
}

function calculate() {
  const expression = result.value;
  if (expression) {
    result.value = eval(expression);
  }
}function resetCalculator() {
    document.getElementById('result').value = '';
  }
  