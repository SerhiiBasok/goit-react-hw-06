import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "../ContactList/list.module.css";

const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts =
    allContacts &&
    allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

  return (
    <div className={css.listContainer}>
      <h2>Contact List:</h2>
      <ul className={css.contactList}>
        {filteredContacts &&
          filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
      </ul>
    </div>
  );
};

export default ContactList;
