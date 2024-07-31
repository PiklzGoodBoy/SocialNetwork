import React from 'react'
import style from './WallModule.module.css'
import Post from './Post/Post'


const WallModule = () => {

  let postData = [
    { message: "Hi, how are you?", likeCount: 11 },
    { message: "It's my firtst project", likeCount: 12 }
  ]

  let Posts = postData.map(p => <Post message={p.message} />)
  return (
    <div className={style.WallModule}>
      {Posts}
    </div>
  )
}

export default WallModule