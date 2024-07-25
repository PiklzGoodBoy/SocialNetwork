import React from 'react'
import style from './LeftBar.module.css'

const LeftBar = () => {
  return (
    <div className={style.LeftBar}>
      <a href="/profile">Моя страница</a>
      <a href="/news">Новости</a>
      <a href="/dialogs">Мессенджер</a>
      <a href="/friends">Друзья</a>
      <a href="/community">Сообщества</a>
      <a href="/music">Музыка</a>
      <a href="/videos">Видео</a>
      <a href="/games">Игры</a>
    </div>
  )
}

export default LeftBar