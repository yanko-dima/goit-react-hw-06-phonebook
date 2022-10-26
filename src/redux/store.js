import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSliser';
import { filterReduser } from './filterSliser';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
