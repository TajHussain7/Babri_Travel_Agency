// Filteration - - - - - - *
function filterPackages() {
  const filter = document.getElementById("filter").value.toLowerCase();
  const rows = document.querySelectorAll("table tbody tr");

  rows.forEach((row) => {
    const packageName = row.cells[0].textContent.toLowerCase();
    if (packageName.includes(filter)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Click View Event - - - - - *
function openModal(packageName) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  if (packageName === "Basic Package 01") {
    modalTitle.textContent = "Basic Package 01 Details";
    modalContent.textContent =
      "This package includes economy flights, 15-day stay at Durrat Mina Hote, and more.";
  } else if (packageName === "Basic Package 02") {
    modalTitle.textContent = "Basic Package 02 Details";
    modalContent.textContent =
      "This package includes economy flights, 12-day stay at Anjum Makkah Hotel, and more.";
  } else if (packageName === "Basic Package 03") {
    modalTitle.textContent = "Basic Package 03 Details";
    modalContent.textContent =
      "This package includes economy flights, 10-day stay at Marriott Makkah Jabal Omar, and more.";
  } else if (packageName === "Basic Package 04") {
    modalTitle.textContent = "Basic Package 04 Details";
    modalContent.textContent =
      "This package includes economy flights, 7-day stay at Danat Al Diafa, and more.";
  } else if (packageName === "Silver Package") {
    modalTitle.textContent = "Silver Package Details";
    modalContent.textContent =
      "This package includes business class flights, 22-day stay at Hilton Makkah, and more.";
  } else if (packageName === "Platinum Package") {
    modalTitle.textContent = "Gold Package Details";
    modalContent.textContent =
      "This package includes first-class flights, 30-day stay at Fairmont Makkah, and more.";
  } else if (packageName === "Gold Package") {
    modalTitle.textContent = "Gold Package Details";
    modalContent.textContent =
      "This package includes first-class flights, 30-day stay at International Madinah, and more.";
  }

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Back Button - - - - - - *
// Back to Home Event
let back_to_Home = document.querySelector(".back");

back_to_Home.addEventListener("click", () => {
  window.location.href = "../Main_Page/index.html";
});
