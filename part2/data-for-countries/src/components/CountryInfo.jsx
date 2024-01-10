import { useState, useEffect } from "react";

import services from "../services/countries";

import Weather from "./Weather";

const CountryInfo = ({ country }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    services.getCityCoords(country.capital).then((geoData) => {
      setWeatherData(geoData);
    });
  }, []);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <button onClick={handleIsOpen}>{isOpen ? "Close" : "Open"}</button>
        <h3>Capital: {country.capital[0]}</h3>
        <h3>Area: {country.area}</h3>
        <h4>Languages:</h4>
        <ul>
          {Object.values(country.languages).map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt="Country flag" />
        <Weather weatherData={weatherData} country={country} />
      </div>
    );
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <button onClick={handleIsOpen}>{isOpen ? "Close" : "Open"}</button>
    </div>
  );
};

export default CountryInfo;
