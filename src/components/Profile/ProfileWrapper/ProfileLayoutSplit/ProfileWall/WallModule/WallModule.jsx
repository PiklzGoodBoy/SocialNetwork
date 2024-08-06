import React from 'react'
import style from './WallModule.module.css'
import Post from './Post/Post'


const WallModule = (props) => {
  // let postData = [
  //   { id: 1, message: "Hi, how are you?", likeCount: 11 },
  //   { id: 2, message: "It's my firtst project", likeCount: 12 }
  // ]

  let Posts = props.postData.map(p => <Post key={p.id} message={p.message} />)
  return (
    <div className={style.WallModule}>
      {Posts}
    </div>
  )
}

export default WallModule