export const addContact = (newContact) => {
  return {
    type: "contacts/addContacts",
    payload: newContact,
  };
};
