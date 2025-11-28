// MENU.JS – Menú móvil + scroll suave
document.addEventListener("DOMContentLoaded", () => {
  // Función global usada por el onclick del header
  window.toggleMenu = function () {
    const nav = document.getElementById("mainNav");
    if (nav) {
      nav.classList.toggle("active");
    }
  };

  // Scroll suave para enlaces internos tipo href="#..."
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetSelector = this.getAttribute("href");
      const target = document.querySelector(targetSelector);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        const nav = document.getElementById("mainNav");
        if (nav) nav.classList.remove("active");
      }
    });
  });
});
