export const addNewContact = (newContact) => {
  return {
    type: "contacts/addContacts",
    payload: newContact,
  };
};
