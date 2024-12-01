// Определение функции loadVideo
function loadVideo() {
  const videoWrapper = document.querySelector(".video-wrapper");
  const iframe = document.createElement("iframe");
  iframe.setAttribute("width", "320");
  iframe.setAttribute("height", "170");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  iframe.setAttribute("allowfullscreen", true);
  videoWrapper.innerHTML = "";
  videoWrapper.appendChild(iframe);
}

// Экспорт функции loadVideo
export { loadVideo };
