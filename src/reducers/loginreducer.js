import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  email: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateLogin: (state, action) => {
      for (const key in action) {
        state[key] = action[key];
      }
    }
  }
})


export default loginSlice.reducer;