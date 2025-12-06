const searchInput = document.getElementById("searchInput");
const gameCards = document.querySelectorAll(".game-card");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("keyup", function() {
  const value = searchInput.value.toLowerCase();
  let found = false;
  gameCards.forEach(card => {
    const gameName = card.querySelector("h3").textContent.toLowerCase();

    if (gameName.includes(value)) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });
  if (!found) {
    noResult.style.display = "block";
  } else {
    noResult.style.display = "none";
  }
});


