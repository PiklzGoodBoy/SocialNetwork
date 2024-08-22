import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './DialogLink.module.css'

export default function DialogLink(props) {
  let path = `/dialogs/${props.id}`
  return (
    <div className={s.DialogLink}>
      <div>
        <img src="https://images.unsplash.com/photo-1551203151-95bd2de7f3a2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <NavLink to={path}>{props.name}</NavLink>

    </div>
  )
}