import { useEffect } from 'react';
import shortid from 'shortid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { PhoneBookBox } from './Phonebook.styled';
import { useState } from 'react';

const SAVE_CONTACTS = 'contacts';

export const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    const getFromToLS = localStorage.getItem(SAVE_CONTACTS);
    const parseLS = JSON.parse(getFromToLS);
    if (parseLS) {
      return parseLS;
    }
    return [];
  });
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(SAVE_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const handleName = e => {
    setName(e.currentTarget.value);
    console.log(e);
  };
  const handleNumber = e => {
    setNumber(e.currentTarget.value);
    console.log(e);
  };
  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleNameAdd = e => {
    e.preventDefault();
    const newName = {
      name,
      number,
      id: shortid(),
    };
    setContacts([...contacts, newName]);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const deleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

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
        onDeleteContact={deleteContact}
        onLength={length}
      />
    </PhoneBookBox>
  );
};
