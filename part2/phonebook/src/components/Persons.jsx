import React from "react";

const Persons = ({ filteredPersons }) => {
  return (
    <>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};

export default Persons;
