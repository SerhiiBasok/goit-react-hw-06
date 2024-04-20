import React from "react";
import css from "../Contact/contact.module.css";
import { BsTelephone } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contactCard}>
      <p>
        <IoIosContact />: {name}
      </p>
      <p>
        <BsTelephone />: {number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
