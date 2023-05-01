import { createSlice } from '@reduxjs/toolkit';
import { getTransactions } from './operations';

const initialState = {
  transactions: [],

  isLoggedIn: false,
  isRefreshing: false,
  error: false,
};

const handlePending = state => {
  state.isRefreshing = true;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload.message || false;
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getTransactions.pending, handlePending)
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.error = false;
      })
      .addCase(getTransactions.rejected, handleRejected);
  },
});

export const transactionsReducer = transactionsSlice.reducer;
