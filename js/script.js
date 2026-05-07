const root = document.documentElement;
const langButtons = document.querySelectorAll("[data-set-lang]");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

// ── Language ──
function setLanguage(lang) {
  root.setAttribute("lang", lang);
  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.setLang === lang);
  });
  localStorage.setItem("arturo-language", lang);
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.setLang));
});

const savedLanguage = localStorage.getItem("arturo-language") || "en";
setLanguage(savedLanguage);

// ── Mobile Menu ──
if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu on outside click
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
}

// ── Active Nav Link ──
const currentPage = window.location.pathname.split("/").pop() || "index.html";
if (nav) {
  nav.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.split("#")[0] === currentPage) {
      link.style.color = "var(--accent)";
      link.style.fontWeight = "700";
    }
  });
}