import { useState, useEffect } from "react";
import axios from "axios";

import services from "./services/phonebook";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    services.getAll().then((initialData) => setPersons(initialData));
  }, []);

  const handleAddNewPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const duplicates = persons.filter(
      (person) => person.name === newPerson.name
    );

    // TODO FIX
    if (duplicates.length) {
      alert(`Sorry, ${newPerson.name} is already in Phonebook!`);
      setNewName("");
    } else {
      services.create(newPerson).then((newPersonData) => {
        setPersons(persons.concat(newPersonData));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  console.log(persons);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />

      <PersonForm
        onAddNewPerson={handleAddNewPerson}
        newName={newName}
        onNameChange={handleNameChange}
        newNumber={newNumber}
        onNumberChange={handleNumberChange}
      />

      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
