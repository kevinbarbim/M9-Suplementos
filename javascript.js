// carousel.js

// 1. Intercepta e suprime erros vindos da API do Google Maps/Places
window.addEventListener("error", (event) => {
  if (event.filename && event.filename.includes("maps.googleapis.com")) {
    event.preventDefault();  // impede esse erro de abortar outros scripts
    console.warn("Erro do Google Maps suprimido:", event.message);
  }
});

// 2. Inicializa o carrossel de produtos de forma isolada
;(function initCarousel() {
  try {
    const scrollers = document.querySelectorAll(".scroller");

    // Se não houver nenhum .scroller, sai cedo
    if (!scrollers.length) return;

    scrollers.forEach((scroller) => {
      // Marca como animado para ativar CSS e keyframes
      scroller.setAttribute("data-animated", "true");

      const inner = scroller.querySelector(".scroller__inner");
      if (!inner) return;

      // Duplica cada item para criar loop infinito
      Array.from(inner.children).forEach((item) => {
        const dup = item.cloneNode(true);
        dup.setAttribute("aria-hidden", "true");
        inner.appendChild(dup);
      });
    });
  } catch (err) {
    console.error("Erro ao inicializar o carrossel:", err);
  }
})();
