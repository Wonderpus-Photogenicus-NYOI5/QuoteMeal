import { createSlice } from '@reduxjs/toolkit'

// user information on recipe
const initialState = {
    username: '',
    recipes: [],
    currentRecipe: '',
    ingredient: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            state.recipes.push(action.payload)
        },
        deleterecipe: (state, action) =>{
            state.recipes = state.recipes.slice(0, action.payload).concat(state.recipes.slice(action.payload+1))
        },
        updateIngredient: (state, action) => {
            state.ingredient = action.payload;
        }

        //action: (state) = {}
    },
})

export const { addRecipe, deleterecipe, updateIngredient} = userSlice.actions
export default userSlice.reducer
