import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});

export const persistor = persistStore(store);
