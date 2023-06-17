import React, { useEffect } from 'react'

import FavRecipe from '../components/FavRecipe.jsx'
import { useSelector, useDispatch } from 'react-redux'

const FavContainer = (props) => {
  const info = useSelector((state) => state.user.recipes);
  const username = useSelector((state) => state.user.username);
  // const { name, category, region, instructions, image, video, ingredients } = info
  const recipeList = info.map((el, index) => (
    <FavRecipe
      username={username}
      index={index}
      name={el.name}
      category={el.category}
      region={el.region}
      instructions={el.instructions}
      image={el.image}
      video={el.video}
      ingredients={el.ingredients}
    />
  ))
  console.log(recipeList);
  return (
    <div>
      <p className='text-center'> Your Favorite Recipes: </p>
      <div className='flex flex-row flex-wrap m-10 space-x-4 space-y-4 justify-around'>
        {recipeList}
      </div>
    </div>)
}

export default FavContainer
