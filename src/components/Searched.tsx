import React, { useEffect, useState } from 'react'
import { useLazySearchRecipesQuery } from '../store/api'
import { useNavigate, useParams, useLocation, Params, NavLink } from 'react-router-dom'
import { Result } from './interface'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Preloader from './Preloader'
import s from './searched.module.css'
import { AiFillHome } from "react-icons/ai"
import logo from '../image/bolos.svg'


const Searched = () => {

  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const params = useParams()
  const location = useLocation()

  const [fetchRecipes, { isLoading, isError, data = {} }] = useLazySearchRecipesQuery()

  const searchName: string | undefined = params.search

  useEffect(() => {
    if (searchName) {
      fetchRecipes({ search: searchName, page: 1 })
    }
    setSearch('')
  }, [location])

  const clickHandler = () => {
    if (search.trim().length) {
      navigate(`/searched/${search}`)
    }
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      clickHandler()
    }
  }  

  const pagesCount: number = Math.ceil((data.totalResults || 1) / 12)

  return (
    <div className={s.searchWrap}>
      <div className={s.searchHome}>
        <NavLink to={`/`}>
          <AiFillHome />
          <h4>Home</h4>
        </NavLink>
      </div>
      <div className={s.searchHead}>

        <input type='text' placeholder='Search Recipes' value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={clickHandler}>Search</button>
      </div>
      {isError && <div>Error...</div>}
      {isLoading && <Preloader />}
      {
        data.totalResults > 0 && searchName ? <div>
          <div className={s.searchItemWrap}>{(data.results || []).map((recipe: Result) => {
            return <NavLink to={`/recipesInformation/${recipe.id}`} key={recipe.id}>
              <div
                className={s.searchItem} key={recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <div>{recipe.title}</div>
              </div>
            </NavLink>
          })}
          </div>

          {searchName && <div className={s.pagination}><Stack spacing={2}>
            <Pagination count={pagesCount} 
            onChange={(event: React.ChangeEvent<unknown>, page: number) => { fetchRecipes({ search: searchName, page }) }} />
          </Stack></div>}
        </div> : <div>
          {searchName !== undefined && <div className={s.errorWrap}>
            <div className={s.error}>{`${searchName} not found`}</div>
          <img src={logo} alt='logo' className={s.logo} />
          </div>
          }
        </div>
      }
    </div >
  )
}

export default Searched