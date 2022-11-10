import { token } from 'redux/RepetaApi';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const addContact = async options => {
  const { data } = await instance.post('/contacts', options);
  return data;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

export const getContactsData = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const setContactsData = createAsyncThunk(
  'contacts/add',
  async (data, rejectWithValue) => {
    try {
      const result = await addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContactsData = createAsyncThunk(
  'contacts/remove',
  async (id, rejectWithValue) => {
    try {
      await removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
