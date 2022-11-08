// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { deleteContactsData } from 'redux/Phonebook/contactsOperations';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/Phonebook/Selector';

import {
  ContactsTitle,
  ContactsNone,
  ContactsList,
  ContactName,
  ContactItem,
  ContactTel,
  ContactBtn,
} from './Contacts.styled';

export const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleDeleteUser = id => {
    dispatch(deleteContactsData(id));
  };
  const length = contacts.length;

  return (
    <>
      {length === 0 ? (
        <ContactsNone>There is no contacts</ContactsNone>
      ) : (
        <ContactsTitle>Contacts</ContactsTitle>
      )}
      <ContactsList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <ContactName>
                {name} : <ContactTel>{number}</ContactTel>
              </ContactName>
              <ContactBtn
                type="button"
                data-id={id}
                onClick={() => handleDeleteUser(id)}
              >
                Delete
              </ContactBtn>
            </ContactItem>
          );
        })}
      </ContactsList>
    </>
  );
};
