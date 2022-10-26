import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlicer = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reduser: (state, action) => {
        return [...state, action.payload];
      },
      prepare: (name, number) => {
        const id = nanoid(5);
        return { payload: { id, name, number } };
      },
    },
  },
  deleteContact: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

export const { addContact, deleteContact } = contactsSlicer.actions;
export const contactsReduser = contactsSlicer.reducer;
