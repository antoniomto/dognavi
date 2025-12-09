// MENU.JS – Menú móvil + scroll suave
document.addEventListener("DOMContentLoaded", () => {
  
  // ✅ YA NO NECESITAMOS toggleMenu() global
  // El script inline en header.html lo maneja
  
  // Scroll suave para enlaces internos tipo href="#..."
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetSelector = this.getAttribute("href");
      const target = document.querySelector(targetSelector);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        
        // Cerrar menú móvil si está abierto
        const nav = document.getElementById("mainNav");
        const toggle = document.getElementById("menuToggle");
        if (nav) nav.classList.remove("active");
        if (toggle) toggle.classList.remove("active");
      }
    });
  });

  // ✅ BACKUP: Re-aplicar listeners si el header se carga dinámicamente
  setTimeout(() => {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");
    
    if (toggle && nav && !toggle.hasAttribute('data-initialized')) {
      toggle.setAttribute('data-initialized', 'true');
      
      toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
      });
    }
  }, 100);
});