import React from "react";

const Results = ({ countries, country }) => {
  if (country === "") {
    return <p>Start typing name of the country above...</p>;
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>{countries[0].name.common}</h2>
      <h3>Capital: {countries[0].capital[0]}</h3>
      <h3>Area: {countries[0].area}</h3>
      <h4>Languages:</h4>
      <ul>
        {Object.values(countries[0].languages).map((l) => (
          <li>{l}</li>
        ))}
      </ul>
      <img src={countries[0].flags.png} alt="Country flag" />
    </div>
  );
};

export default Results;
