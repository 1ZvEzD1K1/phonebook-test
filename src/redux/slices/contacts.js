import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      let contact = state.contacts.find((el) => el.id == action.payload.id);
      state.contacts = contact
        ? state.contacts.map((el) => {
            if (el.id == action.payload.id) {
              return action.payload;
            } else {
              return el;
            }
          })
        : [...state.contacts, action.payload];
    },
    delContact: (state, action) => {
      state.contacts = state.contacts.filter((el) => el.id != action.payload);
    },
  },
});

export default contactsSlice.reducer;
export const { addContact, delContact } = contactsSlice.actions;
