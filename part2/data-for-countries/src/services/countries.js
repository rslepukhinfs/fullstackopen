import axios from "axios";

const url = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => {
  return axios.get(url).then((response) => response.data);
};

const getCityCoords = (city) => {
  return axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=c15269de163d0831850677e32d4a6825
      `
    )
    .then((response) => response.data);
};

const getWeather = (lat, lon) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c15269de163d0831850677e32d4a6825`
    )
    .then((response) => response.data);
};

export default { getAll, getCityCoords, getWeather };
