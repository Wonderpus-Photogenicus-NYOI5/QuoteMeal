import React from 'react'

const FavRecipe = (props) => {
    const { name, category, region, instructions, image, video, ingredients } =
        props

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
            <p>name: {name} </p>
            <p>category: {category}</p>
            <button onClick={handleClick}> Delete </button>
        </div>
    )
}

export default FavRecipe
