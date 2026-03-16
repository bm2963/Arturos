const root = document.documentElement;
const buttons = document.querySelectorAll("[data-set-lang]");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

function setLanguage(lang) {
  root.setAttribute("lang", lang);
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.setLang === lang);
  });
  localStorage.setItem("arturo-language", lang);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.setLang));
});

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const savedLanguage = localStorage.getItem("arturo-language") || "en";
setLanguage(savedLanguage);