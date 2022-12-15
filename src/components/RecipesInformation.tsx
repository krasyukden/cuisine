import React, { useEffect, useState } from 'react'
import { useLazyRecipesInformationQuery } from '../store/api'
import { ExtendedIngredient } from './interface'
import { useParams, useLocation } from 'react-router-dom'
import Preloader from './Preloader'
import s from './recipesInformation.module.css'


const RecipesInformation = () => {

  const params = useParams()
  const location = useLocation()

  const [toggle, setToggle] = useState(false)

  const [fetchRecipes, { isLoading, isError, data }] = useLazyRecipesInformationQuery()

  useEffect(() => {
    if (params.id) fetchRecipes(params.id)
  }, [location])

  return (
    <div className={s.recipesWrap}>
      {isError && <div>Error...</div>}
      {isLoading && <Preloader />}

      {data && <div className={s.recipesTitleWrap} key={data.id}>
        <div className={s.imageWrap}>
          <img src={data.image} alt={data.title} />
          <div className={s.title}>{data.title}</div>
          <a href={data.spoonacularSourceUrl} target='_blank'>Source original</a>
        </div>
        {toggle ? <div>
          <div dangerouslySetInnerHTML={{ __html: data.instructions }} className={s.cuisineInstruction}>
          </div>
          <button onClick={() => setToggle(false)}>Ingredients</button>
        </div>
          :
          <div className={s.cuisineIngredient}>{data.extendedIngredients.map((ingredient: ExtendedIngredient) => {
            return <div key={ingredient.id}>{ingredient.original}</div>
          })}
            <button onClick={() => setToggle(true)}>Instruction</button>
          </div>
        }
      </div>
      }
    </div>
  )
}

export default RecipesInformation