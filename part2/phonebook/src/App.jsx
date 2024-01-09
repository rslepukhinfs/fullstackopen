import { useState, useEffect } from "react";

import services from "./services/phonebook";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const [notification, setNotification] = useState(null);
  const [notificationFlavor, setNotificationFlavor] = useState(null);

  // GET ALL ENTRIES
  useEffect(() => {
    services.getAll().then((initialData) => setPersons(initialData));
  }, []);

  // ADD NEW ENTRY
  const handleAddNewPerson = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const duplicates = persons.filter(
      (person) => person.name === newPerson.name
    );

    if (duplicates.length) {
      const confirmUpdate = window.confirm(
        `${newPerson.name} is already on the list. Do you want to update number?`
      );
      if (confirmUpdate) {
        const currentPerson = duplicates[0];
        services.replace(currentPerson.id, newPerson).then((changedPerson) => {
          setPersons(
            persons.map((p) => (p.id !== changedPerson.id ? p : changedPerson))
          );
          setNewName("");
          setNewNumber("");
          setNotification(`Updated number for ${newPerson.name}!`);
          resetNotification();
        });
      }
    } else {
      services.create(newPerson).then((newPersonData) => {
        setPersons(persons.concat(newPersonData));
        setNewName("");
        setNewNumber("");
        setNotification(`Added ${newPerson.name}!`);
        resetNotification();
      });
    }
  };

  // DELETE ENTRY
  const handleDeleteEntry = (id) => {
    const deletion = window.confirm("Are you sure?");
    if (deletion) {
      services.remove(id).catch((error) => {
        const missedPerson = persons.find((person) => person.id === id);
        setNotification(
          `Information about ${missedPerson.name} not on the server`
        );
        setNotificationFlavor("error");
        resetNotification();
      });
      setPersons(persons.filter((person) => person.id !== id));
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

  const resetNotification = () => {
    setTimeout(() => {
      setNotification(null);
      setNotificationFlavor(null);
    }, 3000);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification
        notification={notification}
        notificationFlavor={notificationFlavor}
      />

      <Filter filter={filter} onFilterChange={handleFilterChange} />

      <PersonForm
        onAddNewPerson={handleAddNewPerson}
        newName={newName}
        onNameChange={handleNameChange}
        newNumber={newNumber}
        onNumberChange={handleNumberChange}
      />

      <PersonsList
        filteredPersons={filteredPersons}
        onDeleteEntry={handleDeleteEntry}
      />
    </div>
  );
};

export default App;
