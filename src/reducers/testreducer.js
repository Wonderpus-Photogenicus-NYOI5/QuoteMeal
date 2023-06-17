import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    array: [],
    count: 0
}

export const testSlicer = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addtoArray: (state, action) => {
            state.array = action.payload;
        },
        count: (state, action) => {
            state.count++;
        }
    },
});

export const { addtoArray, count } = testSlicer.actions;
export default testSlicer.reducer;