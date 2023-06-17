import React from 'react';
import { deleterecipe } from '../reducers/userreducer.js';
import { useDispatch } from 'react-redux'


const FavRecipe = (props) => {
  const dispatch = useDispatch();
  const { username, name, category, region, instructions, image, video, ingredients, index } = props
  // dispatch
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
  const ingredientArray = [];
  for (let i in ingredients) {
      ingredientArray[i] = <p> {ingredients[i].amount} {ingredients[i].name} </p>
  }
  return (
    <div className='card w-72 flex flex-col justify-center items-center border-solid border-slate-500 border-2'>
      <img src={image} className='h-64 w-64 object-cover' />
      <div className='card-body flex flex-col justify-center items-center'>
        <p> {name} </p>
        <p> {category}</p>
        <p> {region} </p>
        {ingredientArray}
        <p> {instructions}</p>
        <button onClick={handleClick} className='btn text-center'> Delete </button>
      </div>
    </div>
  )
}

export default FavRecipe
