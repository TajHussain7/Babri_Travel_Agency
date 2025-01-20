// Show Details in Modal
function showDetails(packageName) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  modal.style.display = "block";

  if (packageName === "Hajj Gold Package") {
    modalTitle.textContent = "Hajj Gold Package";
    modalContent.textContent =
      "This package includes luxury accommodations, flights, and guided tours for Hajj.";
  } else if (packageName === "Umrah Silver Package") {
    modalTitle.textContent = "Umrah Silver Package";
    modalContent.textContent =
      "This affordable package includes comfortable hotels and economy flights for Umrah.";
  } else if (packageName === "Combo Package") {
    modalTitle.textContent = "Combo Package";
    modalContent.textContent =
      "Enjoy both Hajj and Umrah experiences with exclusive perks and services.";
  }
}

// Close Modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Back to Home Event
let back_to_Home = document.querySelector(".back");

back_to_Home.addEventListener("click", () => {
  window.location.href = "../Main_Page/index.html";
});
