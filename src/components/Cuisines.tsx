import React, { useEffect, useState } from 'react'
import { useParams, useLocation, useNavigate, NavLink } from 'react-router-dom'
import Search from '../components/Searched'
import { useLazyCuisinesQuery } from '../store/api'
import Preloader from './Preloader'
import { GiPizzaSlice, GiHotMeal, GiChopsticks, GiCroissant } from "react-icons/gi"
import { FaFish } from "react-icons/fa"
import s from './cuisines.module.css'


const Cuisines = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const params = useParams()

  const [fetchCuisine, { isLoading, isError, data }] = useLazyCuisinesQuery()

  useEffect(() => {
    if (params.name) fetchCuisine(params.name)
  }, [location])

  const handlerCuisine = (cuisine: string) => {

    if (cuisine) {
      navigate(`/cuisine/${cuisine}`)
    } else {
      navigate('/')
    }
  }

  return (
    <div className={s.cuisineWrap}>

      <div className={s.cuisineHead}>
        <div onClick={() => handlerCuisine('italian')}>
          <GiPizzaSlice />
          <h4>Italian</h4>
        </div>
        <div onClick={() => handlerCuisine('vietnamese')}>
          <FaFish />
          <h4>Vietnamese</h4></div>
        <div onClick={() => handlerCuisine('british')}>
          <GiHotMeal />
          <h4>British</h4>
        </div>
        <div onClick={() => handlerCuisine('chinese')}>
          <GiChopsticks />
          <h4>Chinese</h4>
        </div>
        <div onClick={() => handlerCuisine('french')}>
          <GiCroissant />
          <h4>French</h4>
        </div>
      </div>
      <div className={s.cuisineItemWrap}>
        {isError && <div>Error...</div>}
        {isLoading && <Preloader />}
        {data && data.results.map(cuisine => {
          return <NavLink to={`/recipesInformation/${cuisine.id}`} key={cuisine.id}>
            <div className={s.cuisineItem} key={cuisine.id}>
              <img src={cuisine.image} alt={cuisine.title} />
              <div>{cuisine.title}</div>
            </div>
          </NavLink>
        })}
      </div>
    </div>
  )
}

export default Cuisines