import { createSlice } from '@reduxjs/toolkit';
import { signup, login, logout, refreshUser } from './operations';

const initialState = {
  user: {
    _id: null,
    name: null,
    email: null,
    image: null,
    transactions: [],
  },
  accessToken: null,
  refreshToken: null,

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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.accessToken = action.payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, handlePending)
      .addCase(signup.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(signup.rejected, handleRejected)

      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;

        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(login.rejected, handleRejected)

      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {
          _id: null,
          name: null,
          email: null,
          image: null,
          transactions: [],
        };
        state.accessToken = null;
        state.refreshToken = null;

        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(logout.rejected, handleRejected)

      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = false;
      })
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export const { setToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
