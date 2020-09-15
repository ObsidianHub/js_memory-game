(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

const cards = document.querySelectorAll(".memory-card");

cards.forEach((card) => card.addEventListener("click", flipCard));
