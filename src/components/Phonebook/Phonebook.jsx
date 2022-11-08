import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { PhoneBookBox } from './Phonebook.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContactsData } from 'redux/Phonebook/contactsOperations';

export const Phonebook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);
  return (
    <PhoneBookBox>
      <Form />
      <Filter />
      <Contacts />
    </PhoneBookBox>
  );
};
