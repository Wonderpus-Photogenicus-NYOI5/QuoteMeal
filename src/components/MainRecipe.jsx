import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addRecipe } from '../reducers/userreducer';

const MainRecipe = (props) => {
    const username = useSelector((state) => state.user.username);
    const currentRecipe = useSelector((state) => state.user.currentRecipe);
    const dispatch = useDispatch;
    async function handleClick(e) {
        try {
            const result = await fetch('/api', {
                headers: {
                    Accept: 'application/json',
                    'content-Type': 'application.json',
                },
                method: 'PATCH',
                body: JSON.stringify({
                    username: username,
                    recipe: currentRecipe,
                }),
            });
            if (result) {
                dispatch(addRecipe(currentRecipe));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const { name, image, category, region, ingredients, instructions } = currentRecipe;
    const ingredientArray = [];
    for (let i in ingredients) {
        ingredientArray[i] = <p> {ingredients[i].amount} {ingredients[i].name} </p>
    }

    return (
        <div>
            <button onClick={handleClick}>Add to Favorites</button>
            <img src={image} />
            <p>{name}</p>
            <p>{category}</p>
            <p>{region}</p>
            {ingredientArray}
            <p> {instructions}</p>
        </div>
    )
}

export default MainRecipe
