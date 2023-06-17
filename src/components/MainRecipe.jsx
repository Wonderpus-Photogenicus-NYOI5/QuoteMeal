import React from 'react'
import { useSelector } from 'react-redux'

const MainRecipe = (props) => {
    const user = useSelector((state) => state.user)
    const { username, recipes } = user

    async function handleClick(e) {
        e.preventDefault()

        return fetch('/api', {
            headers: {
                Accept: 'application/json',
                'content-Type': 'application.json',
            },
            method: 'PATCH',
            body: JSON.stringify({
                username: username,
                recipe: recipes,
            }),
        })
    }

    return (
        <div>
            <div>
                <image src="image"></image>
                <button onClick={ADDTOFAVORITES}>Add to Favorites</button>
            </div>
        </div>
    )
}

export default MainRecipe
