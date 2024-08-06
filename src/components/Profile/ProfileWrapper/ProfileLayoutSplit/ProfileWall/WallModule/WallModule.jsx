import React from 'react'
import style from './WallModule.module.css'
import Post from './Post/Post'


export default function WallModule  (props)  {
console.log(props)
  let Posts = props.postData.map(p => <Post key={p.id} message={p.message} />)
  return (
    <div className={style.WallModule}>
      {Posts}
    </div>
  )
}