import { useEffect } from 'react';
import shortid from 'shortid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { PhoneBookBox } from './Phonebook.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  addContactAction,
  filterContactAction,
  removeContactAction,
} from 'redux/PhonebookSlice';
import { useDispatch } from 'react-redux';

const SAVE_CONTACTS = 'contacts';

export const Phonebook = () => {
  const dispatch = useDispatch();

  //slice
  const [contacts, setContacts] = useState(() => {
    const getFromToLS = localStorage.getItem(SAVE_CONTACTS);
    const parseLS = JSON.parse(getFromToLS);
    if (parseLS) {
      return parseLS;
    }
    return [];
  });
  const [name, setName] = useState(''); //local
  const [number, setNumber] = useState(''); //local
  const [filter, setFilter] = useState(''); //slice

  useEffect(() => {
    localStorage.setItem(SAVE_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const handleName = e => {
    setName(e.currentTarget.value);
  };
  const handleNumber = e => {
    setNumber(e.currentTarget.value);
  };
  const handleFilter = e => {
    dispatch(filterContactAction(e.currentTarget.value));
  };

  const handleNameAdd = e => {
    e.preventDefault();
    const newName = {
      name,
      number,
      id: shortid(),
    };
    dispatch(addContactAction(newName));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  // const deleteContact = id => {
  //   const newContacts = contacts.filter(contact => contact.id !== id);
  //   setContacts(newContacts);
  // };

  const length = contacts.length;
  const filteredUsers = contacts.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <PhoneBookBox>
      <Form
        onName={name}
        onPhone={number}
        onHandleName={handleName}
        onHandleNumber={handleNumber}
        onHandleNameAdd={handleNameAdd}
      />
      {/* <AddButton /> */}
      <Filter onFilter={filter} onChangeFilter={handleFilter} />
      <Contacts
        onFilteredUers={filteredUsers}
        // onDeleteContact={deleteContact}
        onLength={length}
      />
    </PhoneBookBox>
  );
};
