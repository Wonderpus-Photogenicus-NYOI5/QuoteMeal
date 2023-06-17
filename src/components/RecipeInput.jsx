import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateIngredient, updateCurrent } from '../reducers/userreducer'

const ingredientURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
const recipeURL = 'https://themealdb.com/api/json/v1/1/lookup.php?i='

const RecipeInput = (props) => {
  const ingredient = useSelector((state) => state.user.ingredient)
  const current = useSelector((state) => state.user.currentRecipe)

  const dispatch = useDispatch()

  function handleChange(e) {
    e.preventDefault()
    dispatch(updateIngredient(e.target.value));
  }

   const  handleClick = async () => {
    //parse ingredient

    const newIngredient = ingredient.replace(/ /g, "_")
    //fetch recipe list and parse data
    const data = await fetch(ingredientURL + newIngredient)
    const recipeList = await data.json();
    // console.log('THIS IS THE', recipeList);
    //pick a random recipe and get id
    const id =
      recipeList.meals[
        Math.floor(Math.random() * recipeList.meals.length)
      ].idMeal
     console.log(id);
    // lookup full recipe with meal id and parse the recipe object
    const recipe = await fetch(recipeURL + id)
    const parsedRecipe = await recipe.json();
     const actualParsedRecipe = parsedRecipe.meals[0];
     console.log('PARSED RECIPE', parsedRecipe.meals[0]);
    //deconstruct recipe obj to get required  props
     const {
       strMeal,
       strCategory,
       strArea,
       strInstructions,
       strMealThumb,
       strYoutube,
     } = actualParsedRecipe;
    // create ingredients list property by pushing an object containing ingredient and corresponding measurement
     const ingredientList = [];
    for (let i = 1; i < 20; i++) {
      if (actualParsedRecipe[`strIngredient${i}`]) {
        ingredientList.push({
          name: actualParsedRecipe[`strIngredient${i}`],
          amount: actualParsedRecipe[`strMeasure${i}`],
        })
  
      }
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
    dispatch(updateCurrent(readyRecipe));
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
