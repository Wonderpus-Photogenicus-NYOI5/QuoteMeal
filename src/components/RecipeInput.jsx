import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateIngredient } from '../reducers/userreducer'
const ingredientURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
const recipeURL = 'https://themealdb.com/api/json/v1/1/lookup.php?i='

const RecipeInput = (props) => {
    const current = useSelector((state) => state.user.currentRecipe)
    const dispatch = useDispatch()

    function handleChange(e) {
        e.preventDefault()
        dispatch({ type: updateIngredient, payload: e.target.value })
    }

    async function handleClick() {
        e.preventDefault()
        //parse ingredient
        const ingredient = current.replace(/ /g, _)
        //fetch recipe list and parse data
        const data = await fetch(ingredientURL + ingredient)
        const recipeList = await data.json()
        //pick a random recipe and get id
        const id =
            recipeList.meals[
                Math.floor(Math.random(recipeList.meals.length) * 100)
            ].idmeal
        // lookup full recipe with meal id and parse
        const recipe = await fetch(recipeURL + id)
        const parsedRecipe = await recipe.meals[0].json()
        const {
            strMeal,
            strCategory,
            strArea,
            strInstructions,
            strMealThumb,
            strYoutube,
        } = parsedRecipe
        const ingredientList = []
        for (let i = 1; i < 20; i++) {
            if (parsedRecipe[`StrIngredient${i}`]) ingredient
        }
    }

    return (
        <div>
            <input
                type="text"
                id="ingredient"
                placeholder="What you got?"
                onChange={handleChange}
            >
                {' '}
            </input>
            <input type="button" onClick={handleClick}></input>
        </div>
    )
}

export default RecipeInput
