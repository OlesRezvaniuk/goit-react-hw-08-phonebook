import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/registr', async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const authOperations = { register };

export default authOperations;
