import React from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import { addContactAction } from 'redux/PhonebookSlice';
import { useDispatch } from 'react-redux';
import { AddButton } from '../AddButton/AddButton';
import {
  FormEl,
  FormTitle,
  FormLabel,
  FormElName,
  FormInput,
} from './Form.styled';

export const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(''); //local
  const [number, setNumber] = useState(''); //local

  const handleName = e => {
    setName(e.currentTarget.value);
  };
  const handleNumber = e => {
    setNumber(e.currentTarget.value);
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
  return (
    <>
      <FormTitle>
        <span style={{ color: '#3a72a9' }}>p</span>honebook
      </FormTitle>
      <FormEl onSubmit={handleNameAdd}>
        <FormLabel style={{ position: 'relative' }}>
          <FormElName>Name</FormElName>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleName}
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
            value={number}
            onChange={handleNumber}
          />
        </FormLabel>
        <AddButton />
      </FormEl>
    </>
  );
};
