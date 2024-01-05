// Denne JavaScript-kode gør tre primære ting:

// Den venter på, at hele dokumentet er indlæst og klar til interaktion (DOMContentLoaded).
// Når brugeren klikker på burger-menuen (burgerMenu), skifter den tilstanden af den mobile menu ved at tilføje eller fjerne en klasse kaldet "show-menu" på det tilsvarende HTML-element (mobileMenu). Denne klasse sandsynligvis indeholder styling for at vise eller skjule menuen.
// Hvis brugeren klikker uden for burger-menuen, kontrolleres det ved hjælp af eventet window.addEventListener("click", (event) => { ... }). Hvis klikket ikke er inde i burger-menuen, fjernes "show-menu"-klassen fra det mobile menu-element, hvilket skjuler menuen.
// Så i bund og grund: Koden venter på burger-menuens klik, viser eller skjuler den mobile menu og skjuler menuen, hvis brugeren klikker uden for burger-menuen.

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
