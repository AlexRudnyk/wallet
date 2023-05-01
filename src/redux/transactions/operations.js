import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3030';

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/api/transactions');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
