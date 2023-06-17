import { createSlice } from '@reduxjs/toolkit'

// user information on recipe
const initialState = {
    username: '',
    recipes: [],
    currentRecipe: '',
}

export const userSlice = createSlice({
<<<<<<< HEAD
    name: 'user',
    initialState,
    reducers: {
        addRecipe: (state, action) => {
            state.recipes.push(action.payload)
        },
        //action: (state) = {}
    },
=======
  name: 'user',
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push(action.payload)
    }
    //action: (state) = {}
  },


>>>>>>> dev
})

//export const { addRecipe, action } = userSlice.actions
export default userSlice.reducer
