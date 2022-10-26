import React from 'react';
import PropTypes from 'prop-types';
import { AddButton } from '../AddButton/AddButton';
import {
  FormEl,
  FormTitle,
  FormLabel,
  FormElName,
  FormInput,
} from './Form.styled';
// import PropTypes from 'prop-types';

export const Form = ({
  onName,
  onHandleName,
  onPhone,
  onHandleNumber,
  onHandleNameAdd,
}) => {
  return (
    <>
      <FormTitle>
        <span style={{ color: '#3a72a9' }}>p</span>honebook
      </FormTitle>
      <FormEl onSubmit={onHandleNameAdd}>
        <FormLabel style={{ position: 'relative' }}>
          <FormElName>Name</FormElName>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={onName}
            onChange={onHandleName}
          />
        </FormLabel>
        <FormLabel style={{ position: 'relative' }}>
          <FormElName>Phone</FormElName>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={onPhone}
            onChange={onHandleNumber}
          />
        </FormLabel>
        <AddButton />
      </FormEl>
    </>
  );
};

Form.propTypes = {
  onName: PropTypes.string.isRequired,
  onPhone: PropTypes.string.isRequired,
  onHandleName: PropTypes.func.isRequired,
  onHandleNumber: PropTypes.func.isRequired,
};
