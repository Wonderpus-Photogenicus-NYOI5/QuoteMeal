import { createSlice } from '@reduxjs/toolkit'

// user information on recipe
const initialState = {
    username: '',
    recipes: [],
    currentRecipe: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            state.recipes.push(action.payload)
        },
        //action: (state) = {}
    },
})

//export const { addRecipe, action } = userSlice.actions
export default userSlice.reducer;
