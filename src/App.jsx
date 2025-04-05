import React, { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import initialContacts from "./components/tasks.json";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    try {
      const saved = localStorage.getItem("contacts");
      if (saved) return JSON.parse(saved);
      localStorage.setItem("contacts", JSON.stringify(initialContacts));
      return initialContacts;
    } catch (error) {
      console.error("Error loading contacts from localStorage", error);
      return initialContacts;
    }
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    // setContacts((prev) => [...prev, { id: nanoid(), name, number }]);
    const newContact = { id: nanoid(), name, number };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
