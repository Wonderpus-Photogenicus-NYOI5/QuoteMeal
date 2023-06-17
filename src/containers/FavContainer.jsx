import React from 'react'

import FavRecipe from '../components/MainRecipe.jsx'
import { useSelector, useDispatch } from 'react-redux'

const FavContainer = (props) => {
    const info = useSelector((state) => state.user.recipes)
    const { name, category, region, instructions, image, video, ingredients } =
        info
    const recipeList = info.map((el) => (
        <FavRecipe
            name={name}
            category={category}
            region={region}
            instructions={instructions}
            image={image}
            video={video}
            ingredients={ingredients}
        />
    ))
    return <div>{recipeList}</div>
}

export default FavContainer
