import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlicer = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reduser(state, action) {
        return;
      },
      prepare(name, phone) {
        return {
          payload: {
            name,
            phone,
            id: nanoid(5),
          },
        };
      },
    },
    deleteContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});
