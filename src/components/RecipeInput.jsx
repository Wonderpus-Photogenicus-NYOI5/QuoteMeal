import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateIngredient } from '../reducers/userreducer'
const ingredientURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
const recipeURL = 'https://themealdb.com/api/json/v1/1/lookup.php?i='

const RecipeInput = (props) => {
  const ingredient = useSelector((state) => state.user.ingredient)
  const current = useSelector((state) => state.user.currentRecipe)

  const dispatch = useDispatch()

  function handleChange(e) {
    e.preventDefault()
    dispatch({ type: updateIngredient, payload: e.target.value })
  }

  async function handleClick() {
    e.preventDefault()
    //parse ingredient
    const ingredient = ingredient.replace(/ /g, _)
    //fetch recipe list and parse data
    const data = await fetch(ingredientURL + ingredient)
    const recipeList = await data.json()
    //pick a random recipe and get id
    const id =
      recipeList.meals[
        Math.floor(Math.random(recipeList.meals.length) * 100)
      ].idmeal
    // lookup full recipe with meal id and parse the recipe object
    const recipe = await fetch(recipeURL + id)
    const parsedRecipe = await recipe.meals[0].json()
    //deconstruct recipe obj to get required  props
    const {
      strMeal,
      strCategory,
      strArea,
      strInstructions,
      strMealThumb,
      strYoutube,
    } = parsedRecipe
    // create ingredients list property by pushing an object containing ingredient and corresponding measurement
    const ingredientList = []
    for (let i = 1; i < 20; i++) {
      if (!parsedRecipe[`StrIngredient${i}`]) break
      ingredientList.push({
        name: parsedRecipe[`strIngredient${i}`],
        amount: parsedRecipe[`strMeasure${i}`],
      })
      // Final iteration of recipe ready to go!
    }
    const readyRecipe = {
      name: strMeal,
      category: strCategory,
      region: strArea,
      instructions: strInstructions,
      image: strMealThumb,
      video: strYoutube,
      ingredients: ingredientList,
    }
    dispatch({ type: updateCurrent, payload: readyRecipe })
  }

  return (
    <div className='flex flex-col w-3/4 justify-center items-center m-auto'>
      <input
        className='mb-10'
        type="text"
        id="ingredient"
        placeholder="What you got?"
        onChange={handleChange}
      >
      </input>
      <button onClick={handleClick} className='btn'>Find a recipe</button>
    </div>
  )
}

export default RecipeInput
