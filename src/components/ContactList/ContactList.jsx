// ContactList.jsx
import PropTypes from "prop-types";
import Contact from "../Contact/Contact.jsx";
import css from "../ContactList/list.module.css";
import { useDispatch } from "react-redux";

const ContactList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => {
              dispatch({
                type: "contact/onDelete",
                payload: contact.id,
              });
              onDelete(contact.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
