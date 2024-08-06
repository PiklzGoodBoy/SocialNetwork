import React from 'react'
import style from './Post.module.css'

export default function Post(props) {
  return (
    <div className={style.Post}>
      <img src="https://images.unsplash.com/photo-1721637635502-b0abaaa75edb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
      {props.message}
    </div>
  )
}