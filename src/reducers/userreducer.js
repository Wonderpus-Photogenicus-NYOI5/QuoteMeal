import { createSlice } from '@reduxjs/toolkit'

// user information on recipe
const initialState = {
    username: '',
    recipes: [{name: "recipe", category: "recipe", region: "recipe", instructions: "recipe", image:"https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg", video: "recipe", ingredients:"recipe" }],
    currentRecipe: {},
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
        },
        updateCurrent: (state, action) => {
            state.currentRecipe = action.payload;
        }

        //action: (state) = {}
    },
})

export const { addRecipe, deleterecipe, updateIngredient, updateCurrent} = userSlice.actions
export default userSlice.reducer
