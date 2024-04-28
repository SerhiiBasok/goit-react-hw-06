import css from "../Contact/contact.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactItem}>
      <div className={css.contactDetails}>
        <p className={css.contactName}>Name: {contact.name}</p>
        <p className={css.phoneNumber}>Number: {contact.phoneNumber}</p>
      </div>
      <button onClick={handleDelete} className={css.deleteButton}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
