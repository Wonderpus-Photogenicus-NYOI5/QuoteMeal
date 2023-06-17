import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  username: '',
  password: '',
  noMatch: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUsername: (state, action) => {
      state.username = action.payload;
    },
    loginPassword: (state, action) => {
      state.password = action.payload;
    },
    updateNoMatch: (state, action) => {
      state.noMatch = action.payload;
    },
    clearState: (state, action) => {
      return initialState;
    }
  }
});

export const { loginUsername, loginPassword, updateNoMatch, clearState } = loginSlice.actions;
export default loginSlice.reducer;