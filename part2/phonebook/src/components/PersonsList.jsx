import React from "react";
import PersonEntry from "./Entry";

const PersonsList = ({ filteredPersons, onDeleteEntry }) => {
  return (
    <>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <PersonEntry
          key={person.id}
          person={person}
          onDeleteEntry={() => onDeleteEntry(person.id)}
        />
      ))}
    </>
  );
};

export default PersonsList;
