import React from 'react'
import style from './Message.module.css'


export default function Message(props) {
  return (
    <div className={style.message}>{props.message}</div>
  )
}