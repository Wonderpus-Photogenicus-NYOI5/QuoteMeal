import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const baseURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='

const RecipeInput = (props) => {
    const current = useSelector((state) => state.user.currentRecipe)
    const dispatch = useDispatch()

    function handleChange(e) {
        e.preventDefault()
        dispatch({ type: set_state, payload: e.target.value })
    }

    async function handleClick() {
        e.preventDefault()
        const ingredient = current.replace(/ /g, _)
        const id = await fetch('www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')

    return (
        <div>
            <input
                type="text"
                id="ingredient"
                placeholder="What you got?"
                onChange={handleChange}
            >
                {' '}
            </input>
            <input type="button" onClick={handleClick}></input>
        </div>
    )
}

export default RecipeInput
