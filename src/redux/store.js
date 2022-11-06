import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './PhonebookSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});
