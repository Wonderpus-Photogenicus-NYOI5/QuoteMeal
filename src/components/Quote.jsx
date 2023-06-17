import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Quote = (props) => {
  const recipe = useSelector((state) => state.user.currentRecipe)
  let recipeExists
  if (recipe.name) {
    recipeExists = true
  } else {
    recipeExists = false
  }

  const imgSrc = "https://zenquotes.io/api/image?t=" + new Date().getTime();

  return (
    <div>
      {recipeExists &&
        <img
          src={imgSrc}
        alt="Motivational Quote"
        className = "mb-2"
        />
      }
    </div>
  )
}

export default Quote
