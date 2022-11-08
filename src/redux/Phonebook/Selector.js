import { createSelector } from '@reduxjs/toolkit';

export const selectorItems = state => state.phonebook.items;
export const selectorFilter = state => state.filter.filter;

export const selectorFilteredContacts = createSelector(
  [selectorItems, selectorFilter],
  (items, filtered) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
  }
);
