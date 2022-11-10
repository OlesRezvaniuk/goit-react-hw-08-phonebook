import { createSlice } from '@reduxjs/toolkit';
import {
  deleteContactsData,
  getContactsData,
  setContactsData,
  updateContactData,
} from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const status = {
  init: 'init',
  loading: 'loading',
  success: 'success',
  error: 'error',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  extraReducers: {
    [getContactsData.pending](state) {
      state.status = status.loading;
    },

    [getContactsData.fulfilled](state, action) {
      state.status = status.success;
      state.items = [...action.payload];
    },

    [getContactsData.rejected](state) {
      state.status = status.error;
    },

    [setContactsData.pending](state) {
      state.status = status.loading;
    },

    [setContactsData.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
    },

    [setContactsData.rejected](state) {
      state.status = status.error;
    },
    [deleteContactsData.pending](state) {
      state.status = status.loading;
    },
    [deleteContactsData.fulfilled](state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContactsData.rejected](state) {
      state.status = status.error;
    },
    [updateContactData.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [updateContactData.fulfilled]: (state, action) => {
      let changed = state.items.find(
        contact => contact.id === action.payload.id
      );
      changed.name = action.payload.name;
      changed.number = action.payload.number;
    },
    [updateContactData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default phonebookSlice.reducer;
