import React from 'react'
import Cuisines from '../components/Cuisines'
import Searched from '../components/Searched'
import s from '../components/searched.module.css'

const SearchedPage = () => {
  return (
    <div className={s.pageSearchedWrap}>
      <Searched />
      <div className={s.cuisinesWrap}>
        <Cuisines />
      </div>
    </div>
  )
}

export default SearchedPage