// current date and hour
let now = new Date();
console.log(now);

let timestamp = Date.now();
console.log(timestamp);

function formatDate(timestamp) {
  // get current time
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  // get current date
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.time);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(timestamp);
}

let apiKey = "1fabbbt6e694149ea2da3obbe200ebf2";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Montreal&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
