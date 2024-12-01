// Функция для копирования содержимого из .card-price в .card-shadow
function copyContent() {
  // Находим все элементы с классом .card-price
  const priceElements = document.querySelectorAll(".card-price");
  const shadowElements = document.querySelectorAll(".card-shadow");

  // Проверяем, что количество элементов совпадает
  if (priceElements.length === shadowElements.length) {
    // Проходимся по каждому элементу
    priceElements.forEach(function (priceElement, index) {
      const shadowElement = shadowElements[index];
      // Копируем содержимое из priceElement в shadowElement
      shadowElement.textContent = priceElement.textContent;
    });
  } else {
    console.error(
      "Количество элементов с классами .card-price и .card-shadow не совпадает."
    );
  }
}

// Экспорт функции для использования в HTML
export { copyContent };
