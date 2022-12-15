import React from 'react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootObject, RootResult } from '../components/interface'
import { Params } from 'react-router-dom'

const PUBLIC_KEY = process.env.REACT_APP_API_KEY
type T = any

export const api = createApi({
  reducerPath: 'menu/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spoonacular.com/recipes/'
  }),
  endpoints: build => ({
    dessertMeal: build.query<RootObject, string>({
      query: () => ({
        url: 'random',
        params: {
          apiKey: `${PUBLIC_KEY}`,
          number: 9,
          tags: 'dessert'

        }
      })
    }),
    vegetarianMeal: build.query<RootObject, string>({
      query: () => ({
        url: 'random',
        params: {
          apiKey: `${PUBLIC_KEY}`,
          number: 12,
          tags: 'vegetarian'
        }
      })
    }),
    cuisines: build.query<RootResult, string>({
      query: (cuisineName: string) => ({
        url: 'complexSearch',
        params: {
          apiKey: `${PUBLIC_KEY}`,
          number: 15,
          cuisine: cuisineName
        }
      })
    }),
    searchRecipes: build.query<any, { search: string, page: number }>({
      query: ({ search, page }) => ({
        url: 'complexSearch',
        params: {
          apiKey: `${PUBLIC_KEY}`,
          number: 12,
          query: search,
          offset: (page - 1) * 10
        }
      })
    }),
    recipesInformation: build.query<RootObject, string>({
      query: (id) => ({
        url: `${id}/information`,
        params: {
          apiKey: `${PUBLIC_KEY}`

        }
      })
    })
  })
})

export const { useDessertMealQuery, useVegetarianMealQuery, useLazyCuisinesQuery,
  useLazySearchRecipesQuery, useLazyRecipesInformationQuery } = api