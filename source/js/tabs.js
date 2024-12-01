document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("input[name='price-tab']");
  const contents = document.querySelectorAll(".tabcontent");

  // Функция для показа выбранной вкладки
  function showTabContent() {
    const selectedTab = document.querySelector(
      "input[name='price-tab']:checked"
    );
    const selectedContentId = selectedTab.getAttribute("data-tab");

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    const selectedContent = document.getElementById(selectedContentId);
    if (selectedContent) {
      selectedContent.classList.add("active");
    }
  }

  // Назначаем обработчик событий на радиокнопки
  tabs.forEach((tab) => {
    tab.addEventListener("change", showTabContent);
  });

  // Показ начальной вкладки
  showTabContent();
});

document.addEventListener("DOMContentLoaded", () => {
  const faqTabs = document.querySelectorAll('.faq__tabs input[type="radio"]');
  const contents = document.querySelectorAll(".faq__tabs--content");

  // Функция для отображения активного контента
  const showActiveContent = () => {
    contents.forEach((content) => (content.style.display = "none")); // Скрыть все

    const activeTab = document.querySelector(
      '.faq__tabs input[type="radio"]:checked'
    ); // Найти выбранный таб
    const targetId = activeTab.dataset.tab; // Получить id связанного контента
    const targetContent = document.getElementById(targetId);

    if (targetContent) {
      targetContent.style.display = "block"; // Показать связанный контент
    }
  };

  // Показать активный контент при загрузке страницы
  showActiveContent();

  // Добавить обработчик события на изменение табов
  faqTabs.forEach((tab) => {
    tab.addEventListener("change", showActiveContent);
  });
});
