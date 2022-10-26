import React from 'react';
import PropTypes from 'prop-types';
import { AddButton } from '../AddButton/AddButton';
import {
  FormForm,
  FormTitle,
  FormLabel,
  FormElName,
  FormInput,
} from './Form.styled';
// import PropTypes from 'prop-types';

export const Form = ({
  onName,
  onHandleIncrementName,
  onPhone,
  onHandleIncrementNumber,
  onHandleNameAdd,
}) => {
  return (
    <>
      <FormTitle>
        <span style={{ color: '#3a72a9' }}>p</span>honebook
      </FormTitle>
      <FormForm onSubmit={onHandleNameAdd}>
        <FormLabel style={{ position: 'relative' }}>
          <FormElName>Name</FormElName>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={onName}
            onChange={onHandleIncrementName}
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
            onChange={onHandleIncrementNumber}
          />
        </FormLabel>
        <AddButton />
      </FormForm>
    </>
  );
};

Form.propTypes = {
  onName: PropTypes.string.isRequired,
  onPhone: PropTypes.string.isRequired,
  onHandleIncrementName: PropTypes.func.isRequired,
  onHandleIncrementNumber: PropTypes.func.isRequired,
};
