import React from 'react'
import style from './ProfileSettings.module.css'
import Dropdown from '../../../../../UI/Dropdown/Dropdown'

export default function ProfileSettings() {
  return (
    <div className={style.ProfileSettings}>
      <button>Редактировать профиль</button>
      <Dropdown />
    </div>
  )
}