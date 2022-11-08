import { createSelector } from '@reduxjs/toolkit';

export const selectorPhonebookItems = state => state.phonebook.items;
export const selectorFilter = state => state.filter.filter;

export const selectorFilteredContacts = createSelector(
  [selectorPhonebookItems, selectorFilter],
  (items, filtered) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  }
);
