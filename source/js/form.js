document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("data-form");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const nameError = document.getElementById("name-error");
  const phoneError = document.getElementById("phone-error");

  // Функция проверки имени
  const validateName = () => {
    const nameValue = nameInput.value.trim();
    const isValid = /^[a-zA-Zа-яА-Я\s]+$/.test(nameValue);
    if (!isValid) {
      nameInput.classList.add("error");
      nameError.classList.add("active");
    } else {
      nameInput.classList.remove("error");
      nameError.classList.remove("active");
    }
    return isValid;
  };

  // Функция проверки телефона
  const validatePhone = () => {
    const phoneValue = phoneInput.value.trim();
    const isValid = /^\d+$/.test(phoneValue);
    if (!isValid) {
      phoneInput.classList.add("error");
      phoneError.classList.add("active");
    } else {
      phoneInput.classList.remove("error");
      phoneError.classList.remove("active");
    }
    return isValid;
  };

  // Общая проверка перед отправкой формы
  form.addEventListener("submit", (event) => {
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();

    if (!isNameValid || !isPhoneValid) {
      event.preventDefault(); // Блокируем отправку формы
    }
  });

  // Валидация на потере фокуса
  nameInput.addEventListener("blur", validateName);
  phoneInput.addEventListener("blur", validatePhone);
});
