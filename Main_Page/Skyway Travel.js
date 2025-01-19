// Login File Opening Event
let login = document.querySelector("#Login_Button");
login.addEventListener("click", function () {
  window.location.href = "../Login_Folder/index.html";
});

// Home Page Navigation - - - - - - *
let Home_page = document.getElementById("Home_Page");
Home_page.addEventListener("click", function () {
  window.location.href = "index.html";
});

// Scroll to top - - - - - *
document.getElementById("scrollToTop").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Map API link - - - - - - - - - - - *
// Initialize the map
let map;
async function initMap() {
  // Create a map centered on a default location
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31.447110193659142, lng: 74.26821013684037 }, // Default coordinates (San Francisco)
    zoom: 15,
  });

  // Call the function to fetch place details and add a marker
  await getPlaceDetails();
}

async function getPlaceDetails() {
  const { Place } = await google.maps.importLibrary("places");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Create a Place instance using a Place ID
  const place = new Place({
    id: "ChIJe2-c03UBGTkR-RKCmpJasPQ", // Replace with your desired Place ID
    requestedLanguage: "en", // Optional: specify language
  });

  // Fetch desired fields from the place
  await place.fetchFields({
    fields: [
      "University of Central Punjav,Lahore",
      "Johar Town Lahore",
      "location",
    ],
  });

  // Log the result to the console
  console.log("Place Name:", place.displayName);
  console.log("Address:", place.formattedAddress);

  // Add a marker to the map
  const marker = new AdvancedMarkerElement({
    map,
    position: place.location, // Position from place details
    title: "University of Central Punjab, Lahore",
    Image: "Location Icon.jpeg",
  });
}

// Initialize the map when the page loads
window.onload = initMap;
