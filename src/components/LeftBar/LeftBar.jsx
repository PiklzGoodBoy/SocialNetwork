import React from 'react'
import style from './LeftBar.module.css'
import { NavLink } from 'react-router-dom'

const LeftBar = () => {
  return (
    <div className={style.LeftBar}>
      <NavLink to="/profile" className={style.activeLink} >Моя страница</NavLink> 
      <NavLink to="/news">Новости</NavLink>
      <NavLink to="/dialogs">Мессенджер</NavLink>
      <NavLink to="/friends">Друзья</NavLink>
      <NavLink to="/community">Сообщества</NavLink>
      <NavLink to="/music">Музыка</NavLink>
      <NavLink to="/videos">Видео</NavLink>
      <NavLink to="/games">Игры</NavLink>
    </div>
  )
}

export default LeftBar