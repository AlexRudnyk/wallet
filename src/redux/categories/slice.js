import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './operations';

const initialState = {
  categories: [],

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

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(getCategories.rejected, handleRejected);
  },
});

export const categoriesReducer = categoriesSlice.reducer;
