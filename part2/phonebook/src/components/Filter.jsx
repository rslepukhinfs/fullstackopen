import React from "react";

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      Filter by name:{" "}
      <input type="text" value={filter} onChange={onFilterChange} />
    </div>
  );
};

export default Filter;
