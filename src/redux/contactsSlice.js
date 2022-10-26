import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: '1', name: 'Yanko Dima', number: '0932557000' },
  { id: '2', name: 'Baraban Vladimir', number: '0932599999' },
  { id: '3', name: 'Titkov Ilja', number: '0954442266' },
];

const contactsSlice = createSlice({
  name: 'tasks',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(5),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
