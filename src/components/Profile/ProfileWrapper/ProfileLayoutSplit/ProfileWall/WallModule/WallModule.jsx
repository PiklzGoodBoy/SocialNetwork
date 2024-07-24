import React from 'react'
import style from './WallModule.module.css'
import Post from './Post/Post'


const WallModule = () => {
  return (
    <div className={style.WallModule}>
      <Post message ='Hi, how are you?'/>
      <Post message ="It's my firtst project"/>
      </div>
  )
}

export default WallModule