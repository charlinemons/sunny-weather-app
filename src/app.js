function displayTemperature(response) {
  console.log(response.data);

  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "1fabbbt6e694149ea2da3obbe200ebf2";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Montreal&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
