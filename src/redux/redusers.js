const initialState = [];

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContacts":
      return [...state, action.payload];
    case "contacts/onDelete":
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};
