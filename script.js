const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".game-card");

searchInput.addEventListener("keyup", function() {
  const value = searchInput.value.toLowerCase();

  gameCards.forEach(card => {
    const gameName = card.querySelector("h3").textContent.toLowerCase();

    if (gameName.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
