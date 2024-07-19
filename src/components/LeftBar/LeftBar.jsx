import React from 'react'
import style from './LeftBar.module.css'

const LeftBar = () => {
  return (
    <div className={style.LeftBar}>
      <a href="">Моя страница</a>
      <a href="">Новости</a>
      <a href="">Мессенджер</a>
      <a href="">Друзья</a>
      <a href="">Сообщества</a>
      <a href="">Музыка</a>
      <a href="">Видео</a>
      <a href="">Игры</a>
    </div>
  )
}

export default LeftBar