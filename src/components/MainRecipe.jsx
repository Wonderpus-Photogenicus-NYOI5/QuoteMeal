import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const MainRecipe = (props) => {
    const username = useSelector((state) => state.user.username);
    const recipes = useSelector((state) => state.user.recipes);

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
                    recipe: recipes,
                }),
            });
            if (result) {
                
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <button onClick={handleClick}>Add to Favorites</button>
        </div>
    )
}

export default MainRecipe
