// import React from "react";
import css from "../Contact/contact.module.css";
import { BsTelephone } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { string, func } from "prop-types";

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
Contact.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  number: string.isRequired,
  onDelete: func.isRequired,
};

export default Contact;
