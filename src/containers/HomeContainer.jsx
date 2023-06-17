import RecipeInput from '../components/RecipeInput.jsx'
import MainRecipe from '../components/MainRecipe.jsx'
import Quote from '../components/Quote.jsx'
import React from 'react'
import { useSelector } from 'react-redux'
// import {useEffect} from 'react'
import oatmealImage from '../images/happy-oatmeal.png'

const HomeContainer = (props) => {
  const currentRecipe = useSelector(state => state.user.currentRecipe);
  let searched = false;
  if (currentRecipe.name) searched = true;
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center my-10 text-5xl'> QuoteMeal </h1>
      <img src={oatmealImage} className='m-auto h-60 w-72 mb-8' />
      <RecipeInput />
      <Quote />
      {searched && <MainRecipe />}
    </div>
  )
}

export default HomeContainer
