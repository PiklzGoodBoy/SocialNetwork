import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './Friends.module.css'

export default function Friends(props) {
  return (
    <div className={style.friends_block}>

      <div className={style.friends}>
        Friends List
      </div>

      <div className={style.users}>
        <NavLink to="/usersearch"> Пользователи </NavLink>
      </div>


    </div>
  )
}