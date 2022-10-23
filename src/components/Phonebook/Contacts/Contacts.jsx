import PropTypes from 'prop-types';

import {
  ContactsTitle,
  ContactsNone,
  ContactsList,
  ContactName,
  ContactItem,
  ContactTel,
  ContactBtn,
} from './Contacts.styled';

export const Contacts = ({ onFilteredUers, onDeleteContact, onLength }) => {
  return (
    <>
      {onLength === 0 ? (
        <ContactsNone>There is no contacts</ContactsNone>
      ) : (
        <ContactsTitle>Contacts</ContactsTitle>
      )}

      <ContactsList>
        {onFilteredUers.map(item => {
          return (
            <ContactItem key={item.id}>
              <ContactName>
                {item.name} : <ContactTel>{item.number}</ContactTel>
              </ContactName>
              <ContactBtn
                key={item.id}
                type="button"
                onClick={() => onDeleteContact(item.id)}
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

Contacts.propTypes = {
  onFilteredUsers: PropTypes.func,
  onDeleteContact: PropTypes.func.isRequired,
};
