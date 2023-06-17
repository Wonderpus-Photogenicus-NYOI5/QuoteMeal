import React from 'react'

const FavRecipe = (props) => {
    async function handleClick(e) {
        e.preventDefault()

        return fetch('/api', {
            headers: {
                Accept: 'application/json',
                'content-Type': 'application.json',
            },
            method: 'DELETE',
            body: JSON.stringify({
                username: username,
                index: index,
            }),
        })
    }

    return (
        <div>
            <button onClick={handleClick}> Delete </button>
        </div>
    )
}

export default FavRecipe
