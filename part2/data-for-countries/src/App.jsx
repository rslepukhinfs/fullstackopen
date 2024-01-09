import { useState, useEffect } from "react";

import services from "./services/countries";

import Filter from "./components/Filter";
import Results from "./components/Results";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    services.getAll().then((countriesData) => {
      const filteredData = countriesData.filter((c) =>
        c.name.common.toLowerCase().includes(country.toLowerCase())
      );

      setCountries(filteredData);
    });
  }, [country]);

  const handleCountryFilter = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <Filter onFilterChange={handleCountryFilter} country={country} />
      <Results countries={countries} country={country} />
    </div>
  );
};

export default App;
