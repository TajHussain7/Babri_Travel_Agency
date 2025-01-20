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
    center: { lat: 31.447110193659142, lng: 74.26821013684037 },
    zoom: 15,
  });

  await getPlaceDetails();
}

async function getPlaceDetails() {
  const { Place } = await google.maps.importLibrary("places");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // Create a Place instance using a Place ID
  const place = new Place({
    id: "ChIJe2-c03UBGTkR-RKCmpJasPQ",
    requestedLanguage: "en",
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

// ---------------------------------------------------------------------------------------
// Explore Package Button that is on Image - - - - *
let middle_sectionsButton_One = document.querySelector(
  "#middle_sectionsButton_One"
);
middle_sectionsButton_One.addEventListener("click", function () {
  window.location.href = "../Umrah_Page/index.html";
});

let middle_sectionsButton_Two = document.querySelector(
  "#middle_sectionsButton_Two"
);
middle_sectionsButton_Two.addEventListener("click", function () {
  window.location.href = "../Flights_Page/index.html";
});

// ------------------------------------------------------------------------------------
let Requestor = document.querySelector("#Requestor");
let phoneNumber = document.querySelector("#phonenumber");
let RequestorEmail = document.querySelector("#RequestorEmail");
let Query = document.querySelector("#Query");
let error_Message = document.querySelector("#errorMessage");
let emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let Query_Button = document.querySelector("#Query_Button");

Query_Button.addEventListener("click", function (e) {
  submitFunction(e);
});
function submitFunction() {
  error_Message.style.display = "none";
  if (
    Requestor.value === " " ||
    phoneNumber.value === " " ||
    RequestorEmail.value === "" ||
    Query.value === " "
  ) {
    error_Message.style.display = "block";
    error_Message.textContent = "All fileds are required.";
    e.preventDefault();
    return;
  }
  if (!emailRegExp.test(RequestorEmail.value)) {
    error_Message.style.display = "block";
    error_Message.textContent = "Please enter a valid email address.";
    e.preventDefault();
    return;
  }
  if (
    emailRegExp.test(RequestorEmail.value) &&
    (phoneNumber.value === "" || Requestor.value === "" || Query.value === "")
  ) {
    error_Message.style.display = "block";
    error_Message.textContent = "All fileds are required.";
    e.preventDefault();
    return;
  } else {
    console.log("Login form is successfully submitted. ");
    Query_Button.textContent = "Submitted";
    window.alert("Form is submitted successfully");
  }

  // Remove Event Function
  removeEvent();
}

function removeEvent() {
  setTimeout(() => {
    Requestor.value === " ";
    RequestorEmail.value === " ";
    Query.value === " ";
    phoneNumber === " ";
    console.log("Form reset. ");
    Query_Button.removeEventListener("click", submitFunction);
    Query_Button.textContent = "Submit";
  }, 3000);
}

// Search Flights - - - - *
let Search_Flights = document.querySelector("#Search_Flights");
Search_Flights.addEventListener("click", function () {
  window.location.href = "../Flights_Page/index.html";
});
