import { combineReducers } from 'redux';
import { contactListReducer } from './PhonebookSlice';

export const rootReducer = combineReducers({
  contactList: contactListReducer,
});
