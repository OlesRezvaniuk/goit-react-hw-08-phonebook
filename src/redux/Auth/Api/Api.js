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

export const thunkFetchContacts = createAsyncThunk(
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
export const thunkAddContact = createAsyncThunk(
  'contacts/add',
  async (_, rejectWithValue) => {
    try {
      const data = await addContact();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const thunkRemoveContact = createAsyncThunk(
  'contacts/remove',
  async (_, rejectWithValue) => {
    try {
      const data = await removeContact();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
