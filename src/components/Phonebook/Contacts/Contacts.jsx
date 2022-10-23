import PropTypes from 'prop-types';

import {
  ContactsTitle,
  ContactsList,
  ContactName,
  ContactItem,
  ContactTel,
  ContactBtn,
} from './Contacts.styled';

export const Contacts = ({ onFilteredUers, onDeleteContact }) => {
  return (
    <>
      <ContactsTitle>Contacts</ContactsTitle>
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
  onFilteredUers: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
