function calculate() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);

    if (isNaN(length) || isNaN(width)) {
        alert("Пожалуйста, введите числовые значения для ширины и длины.");
        return;
    }

    var area = length * width;

    document.getElementById("result").textContent = "Площадь: " + area;
}