import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  array: []
}

export const testSlicer = createSlice({
  name: 'test',
  initialState,
  reducers: {
    addtoArray: (state, action) => {
      state.array.push(action)
    }
  },
});

export const { addtoArray } = testSlicer.actions;
export default testSlicer.reducer;