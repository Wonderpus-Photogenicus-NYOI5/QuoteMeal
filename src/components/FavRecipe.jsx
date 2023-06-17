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
  return (
    <div className='card w-50 flex flex-col justify-center items-center'>
      <img src={image} className='h-64 w-64 object-cover' />
      <div className='card-body flex'>
        <p> {name} </p>
        <p> {category}</p>
        <p> {region} </p>
        <p> {ingredients} </p>
        <p> {instructions}</p>
        <button onClick={handleClick} className='card-actions btn-secondary'> Delete </button>
      </div>
    </div>
  )
}

export default FavRecipe
