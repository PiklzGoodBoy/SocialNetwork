import React from 'react'
import style from './SubmitPostBox.module.css'


export default function SubmitPostBox() {
  
  let addPost=()=>{
    alert('Samurai')
  };
  
  
  
  return (
    <div className={style.SubmitPostBox}>

      <div>
        <textarea >
      </textarea>
      </div>
      <button onClick={addPost}>Add post</button>

    </div>
  )
}