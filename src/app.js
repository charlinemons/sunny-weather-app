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
  let meridiem = hours >= 12 ? "PM" : "AM"; // Determine AM or PM

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be displayed as 12

  // get current date
  let numberDate = now.getDate();
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

  let months = [
    "Jan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];

  // return `${day}, ${month} ${numberDate} ${hours}:${minutes}`;
  return `${day}, ${hours}:${minutes} ${meridiem}`;
}

function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.icon_url);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(timestamp);
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", `${response.data.condition.description}`);
}

let apiKey = "1fabbbt6e694149ea2da3obbe200ebf2";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Tokyo&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
