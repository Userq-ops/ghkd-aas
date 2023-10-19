function processNumbers(num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return num1 * num2;
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return num1 + num2;
  } else {
    return num1 % 2 !== 0 ? num1 : num2;
  }
}

function calculate() {
  const num1 = parseInt(document.getElementById('first-cyfr').value);
  const num2 = parseInt(document.getElementById('second-cyfr').value);
  const result = processNumbers(num1, num2);

  const element = document.getElementById('rus');
  element.innerHTML = "Результат: " + result;
}



