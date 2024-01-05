// Hent referencer til knapperne og carousel-elementet
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.querySelector(".carousel");

// Lyt efter klik på "Previous" knappen
prevBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -260, // Antal pixels, der skal scrolles til venstre (260 er bredden på dine billeder)
    behavior: "smooth", // Glat rulningseffekt
  });
});

// Lyt efter klik på "Next" knappen
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: 260, // Antal pixels, der skal scrolles til højre (260 er bredden på dine billeder)
    behavior: "smooth", // Glat rulningseffekt
  });
});
