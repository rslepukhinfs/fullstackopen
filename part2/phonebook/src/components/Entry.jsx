import React from "react";

const Entry = ({ person, onDeleteEntry }) => {
  return (
    <div>
      <p>
        {person.name} {person.number} {"     "}
        <button onClick={onDeleteEntry}>Delete</button>
      </p>
    </div>
  );
};

export default Entry;
