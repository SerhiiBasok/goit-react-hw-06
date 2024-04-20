import React, { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

const App = () => {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setAllContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  }, [allContacts]);

  const addContact = (newContact) => {
    setAllContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setAllContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const [search, setSearch] = useState("");

  const visibleContacts = allContacts.filter(
    (contact) =>
      contact.name && contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox value={search} onChange={setSearch} />
      <ContactForm onAdd={addContact} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
