// Функция для установки стилей элемента с заданным id
function setStyles(id, backgroundColor, textColor, text) {
    const element = document.getElementById(id);
    
    if (element) {
      element.style.backgroundColor = backgroundColor;
      element.style.color = textColor;
      element.textContent = text;
    } else {
      console.error(`Элемент с id "${id}" не найден.`);
    }
  }
  
  // Вызываем функцию и передаем ей нужные параметры
  setStyles("Message", "Lime", "SaddleBrown", "Вассап.");
  