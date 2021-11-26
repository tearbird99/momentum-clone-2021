const icon = document.querySelector("#weather-status i");

const API_KEY = "c15310e8c3f53d81732a61884f648b2f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather-status span");
      const city = document.querySelector("#city");
      const status = data.weather[0].main;
      if (status === "Clear") {
        icon.classList.add("fa-sun");
      } else if (status === "Clouds") {
        icon.classList.add("fa-cloud");
      } else if (status === "Rain" || status == "Drizzle") {
        icon.classList.add("fa-cloud-showers-heavy");
      } else if (status === "Snow") {
        icon.classList.add("fa-snowflake");
      } else if (status === "Thunderstorm") {
        icon.classList.add("fa-bolt");
      } else if (data.weather[0].id >= 700 && data.weather[0].id < 800) {
        icon.classList.add("fa-smog");
      } else {
        icon.classList.add("fa-question");
      }
      city.innerText = data.name;
      weather.innerText = `${Math.floor(data.main.temp)}°`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
