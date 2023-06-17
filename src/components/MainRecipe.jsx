import React from 'react'

const MainRecipe = (props) => {
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
                recipe: recipe,
            }),
        })
    }

    return (
        <div>
            <button onClick={ADDTOFAVORITES}>Add to Favorites</button>
        </div>
    )
}

export default MainRecipe
