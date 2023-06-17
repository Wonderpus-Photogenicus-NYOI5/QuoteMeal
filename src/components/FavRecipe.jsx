import React from 'react'

const FavRecipe = (props) => {
    const { name, category, region, instructions, image, video, ingredients, index, dispatch } = props

    async function handleClick(e) {
        //e.preventDefault()
        try {
            const result = await fetch('/api', {
                headers: {
                    Accept: 'application/json',
                    'content-Type': 'application.json',
                },
                method: 'DELETE',
                body: JSON.stringify({
                    username: username,
                    index: index,
                }),
            });
            if (result) {
                 //call use dispatch to remove from state
                return dispatch(deleterecipe(index));
            } 

        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <img src={image} />
            <p> {name} </p>
            <p> {category}</p>
            <p> {region} </p>
            <p> {ingredients} </p>
            <p> {instructions}</p>
            <button onClick={handleClick}> Delete </button>
        </div>
    )
}

export default FavRecipe
