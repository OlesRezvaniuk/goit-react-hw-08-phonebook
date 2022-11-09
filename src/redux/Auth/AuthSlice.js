import authOperations from '../RepetaApi';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
  },
  token: null,
  inLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {},
  },
});

export default authSlice.reducer;
