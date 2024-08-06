import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './DialogLink.module.css'

export default function DialogLink(props) {
  let path = `/dialogs/${props.id}`
  return (
    <div className={s.DialogLink}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}