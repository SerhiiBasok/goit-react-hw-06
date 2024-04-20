// ContactList.jsx
import React from "react";
import Contact from "../Contact/Contact.jsx";
import css from "../ContactList/list.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => onDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
