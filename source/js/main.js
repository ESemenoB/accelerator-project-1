// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { loadVideo } from "./iframe";
import { copyContent } from "./copycontent";

const swiper = new Swiper(".swiper", {
  loop: true, // Бесконечный цикл
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".juri-button-next",
    prevEl: ".juri-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // Показывать 1 слайд
      navigation: {
        // Кнопки навигации отключены
        enabled: false,
      },
    },
    // Когда ширина экрана больше или равна 768px
    767: {
      spaceBetween: 40,
      slidesPerView: 2, // Показывать 2 слайда
      navigation: {
        // Кнопки навигации включены
        enabled: true,
      },
    },

    1365: {
      spaceBetween: 40,
      slidesPerView: 4,
      navigation: {
        // Кнопки навигации включены
        enabled: true,
      },
    },
  },
});

const reviews__swiper = new Swiper(".reviews__swiper", {
  slidesPerView: 1,
  // centeredSlides: true,
  // spaceBetween: 40,
  navigation: {
    nextEl: ".reviews__button--next",
    prevEl: ".reviews__button--prev",
  },
  loop: false,
});

// Вызов функции после загрузки содержимого страницы
document.addEventListener("DOMContentLoaded", function () {
  copyContent();
});

// Добавление обработчика события для элемента <a>
document
  .querySelector('a[type="custom-play-button"]')
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    loadVideo();
  });
