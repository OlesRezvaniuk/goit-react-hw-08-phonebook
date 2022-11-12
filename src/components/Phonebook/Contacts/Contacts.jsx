import { useSelector, useDispatch } from 'react-redux';
import { deleteContactsData } from 'redux/Phonebook/contactsOperations';
import { selectorFilteredContacts } from 'redux/Phonebook/Selector';
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
  const dispatch = useDispatch();
  const contacts = useSelector(selectorFilteredContacts);
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
