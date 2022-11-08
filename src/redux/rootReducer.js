import { combineReducers } from 'redux';
import phonebookReducer from './Phonebook/PhonebookSlice';
import filterReducer from './Phonebook/filterSlice';

export const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  filter: filterReducer,
});
