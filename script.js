
const apiKey = "ee1ce8c2d8704d6d9eb164201260102";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherDisplay = document.getElementById("weatherDisplay");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city");

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.error) throw new Error(data.error.message);

    weatherDisplay.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p><strong>${data.current.temp_c} °C</strong></p>
      <p>${data.current.condition.text}</p>
      <img src="https:${data.current.condition.icon}" alt="weather icon">
    `;
  } catch (err) {
    weatherDisplay.innerHTML = `<p>Error: ${err.message}</p>`;
  }
});

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchBtn.click();   // pretend the button was clicked
  }
});


