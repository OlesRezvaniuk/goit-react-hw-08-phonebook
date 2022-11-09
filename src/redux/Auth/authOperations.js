export const getOperationsData = createAsyncThunk(
  'phonebook/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
