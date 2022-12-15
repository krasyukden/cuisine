import React from 'react'
import Cuisines from '../components/Cuisines'
import RecipesInformation from '../components/RecipesInformation'
import Search from '../components/Searched'


const RecipesInformationPage = () => {
  return (
    <div>
      <Search />
      <Cuisines />
      <RecipesInformation />
    </div>
  )
}

export default RecipesInformationPage