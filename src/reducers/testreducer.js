import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    array: [],
    count: 0
}

export const testSlicer = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addToArray: (state, action) => {
            state.array = action.payload;
        },
        incrementCount: (state, action) => {
            state.count++;
        }
    },
});

export const { addToArray, incrementCount } = testSlicer.actions;
export default testSlicer.reducer;