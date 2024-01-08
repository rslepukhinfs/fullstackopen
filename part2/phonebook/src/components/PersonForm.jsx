import React from "react";

const PersonForm = ({
  onAddNewPerson,
  newName,
  onNameChange,
  newNumber,
  onNumberChange,
}) => {
  return (
    <>
      <h2>Add new entry</h2>
      <form onSubmit={onAddNewPerson}>
        <div>
          Name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={onNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
