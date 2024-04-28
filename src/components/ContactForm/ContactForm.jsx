import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "../ContactForm/Form.module.css";

const toastStyles = {
  // Стилі тосту
  ".Toastify__toast-container": {
    zIndex: "9999",
  },
  ".Toastify__toast--error": {
    backgroundColor: "#f44336",
  },
  ".Toastify__toast--error:hover": {
    backgroundColor: "#d32f2f",
  },
  ".Toastify__toast-body": {
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    color: "#fff",
  },
};

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = uuidv4();

    if (name.trim() === "" || phoneNumber.trim() === "") {
      toast.error("Name and phone number are required.");
    } else {
      dispatch(addContact({ id, name, phoneNumber }));
      setName("");
      setPhoneNumber("");
    }
  };

  return (
    <div>
      <ToastContainer style={toastStyles} />
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={css.input}
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactsForm;
