import axios from "axios";

export async function getQuote(setter) {
  const endpoint = "https://api.quotable.io/random";
  const response = await axios.get(endpoint);
  setter(response.data.content);
}
export async function fecthAll(setter) {
  const endpoint = "http://127.0.0.1:8000/api/news";
  const response = await axios.get(endpoint);
  setter(response.data.data);
}

export async function fetchOne(setter, id) {
  const endpoint = `http://127.0.0.1:8000/api/news/${id}`;
  const response = await axios.get(endpoint);
  setter(response.data.data);
}
export async function fetchNew(setter) {
  const endpoint =
    "https://newsapi.org/v2/top-headlines?category=general&apiKey=0b334692523f488b909c58af031ee68e";
  const response = await axios.get(endpoint);
  console.log(response);

  setter(response.data.articles);
}
export async function fetchWeather(setter, region) {
  if (region === "") {
    alert("Enter City Name");
    return;
  }
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=6bf4c703948213e3104d4c542038d190`;
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);

  setter({
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    temperature: Math.floor(data.main.temp),
    country: data.name,
  });
}
