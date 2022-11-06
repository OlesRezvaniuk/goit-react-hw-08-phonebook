import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { PhoneBookBox } from './Phonebook.styled';

export const Phonebook = () => {
  return (
    <PhoneBookBox>
      <Form />
      <Filter />
      <Contacts />
    </PhoneBookBox>
  );
};
