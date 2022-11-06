import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedContacts } from './PhonebookSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    contacts: persistedContacts,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
