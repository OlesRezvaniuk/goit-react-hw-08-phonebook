import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  array: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactAction(state, action) {
      state.array.push(action.payload);
    },
    filterContactAction(state, action) {
      state.filter = action.payload;
      state.array = state.array.filter(contact =>
        contact.name.toLowerCase().includes(state.filter.toLowerCase())
      );
    },
    removeContactAction(state, action) {
      state.array = state.array.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContactAction, filterContactAction, removeContactAction } =
  contactsSlice.actions;

export default contactsSlice.reducer;
