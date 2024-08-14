import React from 'react'
import style from './SubmitPostBox.module.css'


export default function SubmitPostBox() {
  
  let newPostElement = React.createRef();



  let addPost=()=>{
    let text = newPostElement.current.value
    alert(text)
  };
  
  
  
  return (
    <div className={style.SubmitPostBox}>

      <div>
        <textarea ref={newPostElement}>
      </textarea>
      </div>
      <button onClick={addPost}>Add post</button>

    </div>
  )
}