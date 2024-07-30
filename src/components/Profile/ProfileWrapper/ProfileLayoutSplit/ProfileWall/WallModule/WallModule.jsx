import React from 'react'
import style from './WallModule.module.css'
import Post from './Post/Post'


const WallModule = () => {

  let postData = [
    {message:"Hi, how are you?", likeCount:11},
    {message:"It's my firtst project", likeCount:12}
  ]

  return (
    <div className={style.WallModule}>
      <Post message={postData[0].message}  />
      <Post message={postData[1].message} />
    </div>
  )
}

export default WallModule