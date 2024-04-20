// storage.js
import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./redusers";

const initialState = {
  contacts: [],
};

const rootReducer = (state = initialState, action) => {
  return { contacts: contactsReducer(state.contacts, action) };
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
