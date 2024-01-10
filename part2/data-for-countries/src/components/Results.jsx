import CountryInfo from "./CountryInfo";

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
          <li key={country.name.common}>
            <CountryInfo country={country} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <CountryInfo country={countries[0]} />
    </div>
  );
};

export default Results;
