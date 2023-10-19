function compareNumbers(first, second) {
  if (first < second) {
    return "Первое число меньше второго";
  } else if (first > second) {
    return "Первое число больше второго";
  } else {
    return "Оба числа равны";
  }
}

function compareAndDisplayResult() {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(document.getElementById("secondNumber").value);

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    document.getElementById("resultMessage").innerText = "Пожалуйста, введите корректные числа.";
  } else {
    const result = compareNumbers(firstNumber, secondNumber);
    document.getElementById("resultMessage").innerText = "Результат сравнения: " + result;
  }
}
