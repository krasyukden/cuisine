import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cuisines from '../components/Cuisines'
import { Recipe } from '../components/interface'
import Preloader from '../components/Preloader'
import Search from '../components/Searched'
import { useDessertMealQuery, useVegetarianMealQuery } from '../store/api'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import s from '../components/home.module.css'
import { display } from '@mui/system'

const HomePage = () => {

  const LS_KEY_DES = 'rfd'
  const LS_KEY_VEG = 'rfv'

  const [dataDessert, setDataDessert] = useState(JSON.parse(localStorage.getItem(LS_KEY_DES) || '{}'))

  const { isLoading, isError, data } = useDessertMealQuery('')
  
  useEffect(() => {
    if (data) localStorage.setItem(LS_KEY_DES, JSON.stringify(data))
  }, [data])

  useEffect(() => {
    if (localStorage.getItem(LS_KEY_DES)) setDataDessert(JSON.parse(localStorage.getItem(LS_KEY_DES) || '{}'))
  }, [data])

  const { isLoading: isLoadVeget, isError: isErrorVeget, data: dataVeget } = useVegetarianMealQuery('')

  
  return (
    <div className={s.homeWrap}>
      <div className={s.homeSearch}>
        <Search />
      </div>
      <div className={s.homeCuisines}>
        <Cuisines />
      </div>
      <h2>Desserts</h2>
      <div>
        {isError && <div>Error...</div>}
        {isLoading && <Preloader />}

        <Splide options={{
          perPage: 3,
          arrows: true,
          pagination: true,
          rewind: true,
          drag: 'free'
        }} >
          {dataDessert && (dataDessert.recipes || []).map((recipe: Recipe) => {
            return <SplideSlide key={recipe.id}>
              {recipe.image ?  <NavLink to={`/recipesInformation/${recipe.id}`} className={s.navLink}
              >
                <div className={s.dessertsItem}>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className={s.titleDessert}>{recipe.title}</div>
                </div>
              </NavLink>
            : <div className={s.titleDessert}>Already eaten</div>
            }
            </SplideSlide>
          })}
        </Splide>
      </div>
      <h2>Vegetarian food</h2>
      <div>
        {isErrorVeget && <div>Error...</div>}
        {isLoadVeget && <Preloader />}
        <Splide options={{
          perPage: 4,
          arrows: true,
          pagination: true,
          rewind: true,
          drag: 'free'
        }}>
          {dataVeget && dataVeget.recipes.map((recipe: Recipe) => {
            return <SplideSlide key={recipe.id}>
              {recipe.image ? <NavLink to={`/recipesInformation/${recipe.id}`} className={s.navLink}
              >
                <div className={s.vegetarianItem}>
                  <img src={recipe.image} alt={recipe.title} />
                  <div className={s.titleVega}>{recipe.title}</div>
                </div>
              </NavLink> :
              <div className={s.titleDessert}>Already eaten, yum...</div>
              }
            </SplideSlide>
          })}
        </Splide>
      </div>
    </div>
  )
}

export default HomePage