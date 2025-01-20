// Initialize the Google Map
function initMap() {
  const location = { lat: 31.447110193659142, lng: 74.26821013684037 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "University of Central Punjab, Lahore",
  });
}

window.onload = initMap;

// Form Validation and Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Success message
  alert(
    "Thank you for contacting us, " + name + "! We'll get back to you shortly."
  );

  // Reset the form after submission
  document.getElementById("contactForm").reset();
});

// Back to Home Event
let back_to_Home = document.querySelector(".back");

back_to_Home.addEventListener("click", () => {
  window.location.href = "../Main_Page/index.html";
});
