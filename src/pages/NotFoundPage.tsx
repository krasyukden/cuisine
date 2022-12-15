import React from 'react';
import { useLocation } from 'react-router-dom';
import s from '../components/notFoundPage.module.css';
import logo from '../image/woolly-pizza.png'

function NotFoundPage() {

  const location = useLocation()
  const error = location.pathname;

  return (
    <div className={s.wrapper} >
      <div className={s.error}>Error 404. Page `{error}` not found</div>
      <img src={logo} alt='logo' className={s.logo} />
    </div>
  )
}

export default NotFoundPage;


