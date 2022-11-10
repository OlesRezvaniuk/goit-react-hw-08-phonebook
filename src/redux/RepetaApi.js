import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
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
    token.set(data.token);
    return data;
  } catch (error) {
    alert(error.message);
  }
});

const login = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    return data;
  } catch (error) {
    alert(error.message);
  }
});
const logout = createAsyncThunk('auth/logout', async user => {
  try {
    const { data } = await axios.post('/users/logout', user);
    token.unset();
    return data;
  } catch (error) {
    alert(error.message);
  }
});
const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return state;
  }
  try {
    token.set(persistedToken);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    token.unset();
    alert(error.message);
  }
});

const authOperations = { register, login, logout, refresh };

export default authOperations;
