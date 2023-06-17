import RecipeInput from '../components/RecipeInput.jsx'
import MainRecipe from '../components/MainRecipe.jsx'
import Quote from '../components/Quote.jsx'
import React from 'react'
// import {useEffect} from 'react'

const HomeContainer = (props) => {
    return (
        <div>
            <h1> QuoteMeal </h1>
            <RecipeInput />
            <Quote />
            <MainRecipe />
        </div>
    )
}

export default HomeContainer
