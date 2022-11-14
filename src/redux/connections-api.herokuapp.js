import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
    Notify.success(`Sing Up is success`);
    return data;
  } catch (error) {}
});

const login = createAsyncThunk('auth/login', async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    Notify.success(`Sing In is success`);
    return data;
  } catch (error) {
    Notify.failure(error.message);
  }
});
const logout = createAsyncThunk('auth/logout', async user => {
  try {
    const { data } = await axios.post('/users/logout', user);
    token.unset();
    Notify.success(`You are logout`);
    return data;
  } catch (error) {
    Notify.failure(error.message);
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
    Notify.success(`Relogin is success`);
    return data;
  } catch (error) {
    token.unset();
    Notify.failure(error.message);
  }
});

const authOperations = { register, login, logout, refresh };

export default authOperations;
