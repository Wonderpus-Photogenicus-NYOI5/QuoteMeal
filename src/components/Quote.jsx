import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Quote = (props) => {
    const recipe = useSelector((state) => state.currentRecipe)

    return (
        <div>
            <img
                src="https://zenquotes.io/api/image"
                alt="Motivational Quote"
            />
        </div>
    )
}

export default Quote
