import React, { useEffect } from 'react'

import FavRecipe from '../components/FavRecipe.jsx'
import { useSelector, useDispatch } from 'react-redux'

const FavContainer = (props) => {
    const info = useSelector((state) => state.user.recipes);
    const username = useSelector((state) => state.username);
    // const { name, category, region, instructions, image, video, ingredients } = info
    const recipeList = info.map((el, index) => (
        <FavRecipe
            username = {username}
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
    return <div>
        <p> Your Favorite Recipes: </p>
        {recipeList}
         </div>
}

export default FavContainer
