import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const contactsInitialState = {
//   data: [
//     { id: '1', name: 'Yanko Dima', number: '0932557000' },
//     { id: '2', name: 'Baraban Vladimir', number: '0932599999' },
//     { id: '3', name: 'Titkov Ilja', number: '0954442266' },
//   ],
// };

const contactsInitialState = [
  { id: '1', name: 'Yanko Dima', number: '0932557000' },
  { id: '2', name: 'Baraban Vladimir', number: '0932599999' },
  { id: '3', name: 'Titkov Ilja', number: '0954442266' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.data.push(action.payload);
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
      const index = state.data.findIndex(
        contact => contact.id === action.payload
      );
      state.data.splice(index, 1);
    },
  },
});

export const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReduser = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.data;
