const flights = [
  {
    id: 1,
    departure: "Lahore",
    arrival: "Germany",
    time: "10:00 AM",
    price: 500,
  },
  {
    id: 2,
    departure: "Lahore",
    arrival: "Belgium",
    time: "2:30 PM",
    price: 450,
  },
  { id: 3, departure: "Lahore", arrival: "China", time: "6:00 AM", price: 700 },
  {
    id: 4,
    departure: "Lahore",
    arrival: "Qatar",
    time: "1:00 PM",
    price: 600,
  },
  {
    id: 5,
    departure: "Karachi",
    arrival: "Itlay",
    time: "8:00 AM",
    price: 900,
  },
  {
    id: 6,
    departure: "Lahore",
    arrival: "Abu Dhabi",
    time: "8:00 AM",
    price: 690,
  },
  {
    id: 7,
    departure: "Lahore",
    arrival: "USA",
    time: "8:00 AM",
    price: 1265,
  },
];

const flightList = document.getElementById("Country_flightList");

// Display flights dynamically
function displayFlights(flights) {
  flightList.innerHTML = "";
  flights.forEach((flight) => {
    const flightCard = document.createElement("div");
    flightCard.classList.add("flight-card");
    flightCard.innerHTML = `
        <h3>${flight.departure} → ${flight.arrival}</h3>
        <p>Time: ${flight.time}</p>
        <p>Price: $${flight.price}</p>
        <button onclick="confirmFlight(this)">Confirm</button>
      `;
    flightList.appendChild(flightCard);
  });
}

// Confirm flight booking - - - - - - *
function confirmFlight(button) {
  button.textContent = "Confirmed";
  button.disabled = true;
  button.style.backgroundColor = "green";
}

// Generate graph data - - - - - - - *
function generateGraphData(flights) {
  const labels = flights.map(
    (flight) => `${flight.departure} → ${flight.arrival}`
  );
  const prices = flights.map((flight) => flight.price);
  return { labels, prices };
}

// Create a bar graph
function createBarGraph(canvasId, labels, data, title) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: title,
          data: data,
          backgroundColor: [
            "#0073e6",
            "#00b33c",
            "#ff4d4d",
            "#ffa500",
            "#800080",
            "#1aa598",
            "hotpink",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 5,
      scales: {
        x: {
          maxBarThickness: 50,
        },
      },
      plugins: {
        legend: { display: true },
        title: { display: true, text: title },
      },
    },
  });
}

// Handle form submission
document
  .getElementById("CountryflightForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const departure = document.getElementById("departure").value.toLowerCase();
    const arrival = document.getElementById("arrival").value.toLowerCase();

    const filteredFlights = flights.filter(
      (flight) =>
        flight.departure.toLowerCase().includes(departure) &&
        flight.arrival.toLowerCase().includes(arrival)
    );

    if (filteredFlights.length > 0) {
      displayFlights(filteredFlights);
    } else {
      flightList.innerHTML = "<p>No flights found for the selected route.</p>";
      flightList.style.color = "1aa598";
      flightList.style.fontWeight = "bold";
    }
  });

// Render Graphs
const flightData = generateGraphData(flights);
createBarGraph(
  "flightPriceGraphForCountry",
  flightData.labels,
  flightData.prices,
  "Flight Price Comparison"
);

// ----------------------------------------------------------------------------------------
// City to City Graph
const travels = [
  {
    id: 1,
    departure: "Lahore",
    arrival: "Islamabad",
    time: "9:00 AM",
    price: 5000,
  },
  {
    id: 2,
    departure: "Karachi",
    arrival: "Lahore",
    time: "11:00 AM",
    price: 7000,
  },
  {
    id: 3,
    departure: "Islamabad",
    arrival: "Peshawar",
    time: "1:00 PM",
    price: 1450,
  },
  {
    id: 4,
    departure: "Lahore",
    arrival: "Multan",
    time: "2:30 PM",
    price: 6000,
  },
  {
    id: 5,
    departure: "Peshawar",
    arrival: "Karachi",
    time: "5:00 PM",
    price: 6890,
  },
  {
    id: 6,
    departure: "Quetta",
    arrival: "Lahore",
    time: "7:00 PM",
    price: 8050,
  },
  {
    id: 7,
    departure: "Lahore",
    arrival: "Faisalabad",
    time: "6:30 AM",
    price: 3000,
  },
];

const travelList = document.getElementById("City_flightList");

// Display city-to-city travel dynamically
function displayTravels(travels) {
  travelList.innerHTML = "";
  travels.forEach((travel) => {
    const travelCard = document.createElement("div");
    travelCard.classList.add("flight-card");
    travelCard.innerHTML = `
          <h3>${travel.departure} → ${travel.arrival}</h3>
          <p>Time: ${travel.time}</p>
          <p>Price: $${travel.price}</p>
          <button onclick="confirmTravel(this)">Confirm</button>
        `;
    travelList.appendChild(travelCard);
  });
}

// Confirm travel booking
function confirmTravel(button) {
  button.textContent = "Confirmed";
  button.disabled = true;
  button.style.backgroundColor = "green";
}

// Generate graph data for city-to-city travel
function generateGraphData(travels) {
  const labels = travels.map(
    (travel) => `${travel.departure} → ${travel.arrival}`
  );
  const prices = travels.map((travel) => travel.price);
  return { labels, prices };
}

// Create a bar graph
function createBarGraph(canvasId, labels, data, title) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: title,
          data: data,
          backgroundColor: [
            "#0073e6",
            "#22d3ee",
            "#22c55e",
            "#d946ef",
            "#800080",
            "#1aa598",
            "hotpink",
          ],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: { display: true, text: title },
      },
    },
  });
}

// Handle form submission for city-to-city travel
document
  .getElementById("CityflightForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const departure = document.getElementById("departure").value.toLowerCase();
    const arrival = document.getElementById("arrival").value.toLowerCase();

    const filteredTravels = travels.filter(
      (travel) =>
        travel.departure.toLowerCase().includes(departure) &&
        travel.arrival.toLowerCase().includes(arrival)
    );

    if (filteredTravels.length > 0) {
      displayTravels(filteredTravels);
    } else {
      travelList.innerHTML =
        "<p>No travel routes found for the selected cities.</p>";
      travelList.style.color = "#1aa598";
      travelList.style.fontWeight = "bold";
    }
  });

// Render Graphs for city-to-city travel
const travelData = generateGraphData(travels);
createBarGraph(
  "flightPriceGraphForCity",
  travelData.labels,
  travelData.prices,
  "City-to-City Travel Price Comparison"
);

// Back to Home Event
let back_to_Home = document.querySelector(".back");

back_to_Home.addEventListener("click", () => {
  window.location.href = "../Main_Page/index.html";
});
