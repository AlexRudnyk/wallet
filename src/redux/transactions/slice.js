import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
} from './operations';

const initialState = {
  transactions: [],

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
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(getTransactions.rejected, handleRejected)
      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions = [...state.transactions, action.payload];
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(addTransaction.rejected, handleRejected)
      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        const res = state.transactions.filter(
          item => action.payload._id !== item._id
        );
        state.transactions = res;
      })
      .addCase(deleteTransaction.rejected, handleRejected);
  },
});

export const transactionsReducer = transactionsSlice.reducer;
