import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addRecipe } from '../reducers/userreducer';

const MainRecipe = (props) => {
  const username = useSelector((state) => state.user.username);
  const currentRecipe = useSelector((state) => state.user.currentRecipe);
  const dispatch = useDispatch();
  async function handleClick(e) {
    try {
      const result = await fetch('/api', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
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
    <div className='card w-3/4 flex flex-col justify-center items-center border-solid border-slate-500 border-2'>
      <img src={image} className="rounded-lg mt-2" />
      <p><strong>{name}</strong></p>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Region:</strong> {region}</p>
      {ingredientArray}
      <p className="p-5"> {instructions}</p>
      <button onClick={handleClick} className='btn'>Add to Favorites</button>
    </div>
  )
}

export default MainRecipe
