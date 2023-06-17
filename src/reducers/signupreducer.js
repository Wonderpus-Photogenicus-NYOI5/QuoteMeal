import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  email: '',
  wrongPassword: false,
}

export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    updateConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateWrongPassword: (state, action) => {
      state.wrongPassword = action.payload;
    },
    clearState: (state, action) => {
      return initialState;
    }
  }
})

export const { updateUsername, updatePassword, updateConfirmPassword, updateFirstName, updateLastName, updateEmail, updateWrongPassword, clearState } = signupSlice.actions;
export default signupSlice.reducer;