// document.querySelectorAll(".accordion-header").forEach((header) => {
//   header.addEventListener("click", () => {
//     const item = header.parentElement;
//     const body = item.querySelector(".accordion-body");
//     const toggle = header.querySelector(".toggle");

//     if (item.classList.contains("open")) {
//       item.classList.remove("open");
//       //   toggle.textContent = "+";
//     } else {
//       item.classList.add("open");
//       //   toggle.textContent = "-";
//     }
//   });
// });

// document.querySelectorAll(".toggle").forEach((toggle) => {
//   toggle.addEventListener("click", (event) => {
//     const header = toggle.closest(".accordion-header");
//     const item = header.parentElement;
//     const body = item.querySelector(".accordion-body");

//     if (item.classList.contains("open")) {
//       item.classList.remove("open");
//     } else {
//       item.classList.add("open");
//     }

//     // Предотвращаем всплытие события, чтобы клик по `.toggle` не срабатывал на родителе
//     event.stopPropagation();
//   });
// });

document.querySelectorAll(" .toggle").forEach((toggle) => {
  toggle.addEventListener("click", (event) => {
    const parentDiv = toggle.closest("div"); // Ищет ближайший родительский <div>
    const item = parentDiv.parentElement; // Предполагается, что это .accordion-item
    const body = item.querySelector("p");
    if (item.classList.contains("open")) {
      item.classList.remove("open");
    } else {
      item.classList.add("open");
    }

    // Предотвращаем всплытие события
    event.stopPropagation();
  });
});
