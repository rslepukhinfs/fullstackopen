import React from "react";

const Filter = ({ onFilterChange, country }) => {
  return (
    <div>
      <label htmlFor="searchbar">Find countries: </label>
      <input type="text" onChange={onFilterChange} value={country} />
    </div>
  );
};

export default Filter;
