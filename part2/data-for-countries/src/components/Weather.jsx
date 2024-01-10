import { useEffect, useState } from "react";
import services from "../services/countries";

const Weather = ({ weatherData, country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    services
      .getWeather(weatherData[0].lat, weatherData[0].lon)
      .then((weather) => setWeather(weather));
  }, []);

  if (!weather) return null;
  return (
    <div>
      <h3>Weather in {country.capital}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
      <p>Temperature {(weather.main.temp - 273.15).toFixed(1)} Celcius</p>
      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
