// Show Details in Modal
function showDetails(packageName) {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  modal.style.display = "block";
  // First Offer scetion -
  if (packageName === "World Tour Gold Package") {
    modalTitle.textContent = "World Tour Gold Package";
    modalContent.textContent =
      "Explore the world in luxury with our Golden Package! This offer includes business-class flights, 5-star accommodations, exclusive guided tours, and access to world-renowned destinations like Paris, Dubai, and Singapore. Perfect for travelers seeking the ultimate comfort and unforgettable experiences.";
  } else if (packageName === "World Tour Silver Package") {
    modalTitle.textContent = "World Tour Silver Package";
    modalContent.textContent =
      "Experience the beauty of the world at an affordable price with our Silver Package. Enjoy economy-class flights, 3-star accommodations, and guided tours to popular destinations. A budget-friendly way to explore the wonders of the globe.";
  } else if (packageName === "World Tour Combo Package") {
    modalTitle.textContent = "World Tour Combo Package";
    modalContent.textContent =
      "Get the best of both worlds with our Combo Package! This package combines affordable luxury with premium perks, including mixed-class flights, a combination of 3-star and 5-star hotels, and access to diverse destinations worldwide. Ideal for those who want flexibility in their travel plans.";
  }
  // Second Offer section -
  if (packageName === "Gold Package") {
    modalTitle.textContent = "Hajj and Umrah Gold Package";
    modalContent.textContent =
      "Embark on a spiritual journey with our Golden Hajj and Umrah Package. This premium offering includes first-class flights, luxury accommodations close to Haram, private guided services, and exclusive VIP access for a hassle-free and spiritually enriching experience.";
  } else if (packageName === "Silver Package") {
    modalTitle.textContent = "Hajj and Umrah Silver Package";
    modalContent.textContent =
      "Perfect for pilgrims on a budget, our Silver Hajj and Umrah Package provides economy-class flights, comfortable hotels, transportation between holy sites, and knowledgeable guides. Experience the sacred journey without compromising on quality.";
  } else if (packageName === "Combo Package") {
    modalTitle.textContent = "Hajj and Umrah Combo Package";
    modalContent.textContent =
      "Experience the blessings of both Hajj and Umrah with our Combo Package! This package includes a mix of luxury and affordability with semi-premium flights, 4-star accommodations, transportation services, and dedicated guides to ensure a spiritually fulfilling trip.";
  }
  // Third offer section -
  if (packageName === "Safaris") {
    modalTitle.textContent = "Safaris Package Details";
    modalContent.textContent =
      "Go on an unforgettable safari adventure! Our Safari Package includes guided tours through the wilderness of Africa, access to private wildlife reserves, luxury tents or lodges, and up-close encounters with the Big Five. A perfect choice for nature enthusiasts!";
  } else if (packageName === "Hiking") {
    modalTitle.textContent = "Hiking Package Details";
    modalContent.textContent =
      "Explore breathtaking trails and landscapes with our Hiking Package! From the majestic Himalayas to the stunning Alps, this package includes guided treks, safety equipment, and accommodations along the routes. Designed for adventurers and fitness lovers.";
  } else if (packageName === "Diving") {
    modalTitle.textContent = "Diving Package Details";
    modalContent.textContent =
      "Dive into a world of underwater wonders! Our Diving Package includes guided scuba dives, access to world-class dive sites like the Maldives and the Great Barrier Reef, certified instructors, and top-notch diving gear. Ideal for marine life enthusiasts!";
  }
  // Forth Offer section -
  if (packageName === "Membership") {
    modalTitle.textContent = "Membership Package Details";
    modalContent.textContent =
      "Unlock exclusive perks with our Membership Program! Members enjoy early access to special offers, loyalty discounts on all packages, priority booking, and personalized travel plans. Join now to elevate your travel experience.";
  } else if (packageName === "Student Discount") {
    modalTitle.textContent = "Student's Discount Details";
    modalContent.textContent =
      "Special discounts for students! Travel the world without breaking the bank with up to 20% off on select packages. Enjoy budget-friendly options for study tours, educational trips, or simply exploring the world. Valid student ID required.";
  }
}

// Close Modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
// What's App
function PhoneNumber() {
  window.location.href = "https://wa.me/+923438002540";
}

// Back to Home Event
let back_to_Home = document.querySelector(".back");

back_to_Home.addEventListener("click", () => {
  window.location.href = "../Main_Page/index.html";
});
