import { combineReducers } from 'redux';
import phonebookReducer from './Phonebook/PhonebookSlice';
import filterReducer from './Phonebook/filterSlice';
import { persisteAuthReducer } from './Auth/AuthSlice';

export const rootReducer = combineReducers({
  phonebook: phonebookReducer,
  filter: filterReducer,
  auth: persisteAuthReducer,
});
