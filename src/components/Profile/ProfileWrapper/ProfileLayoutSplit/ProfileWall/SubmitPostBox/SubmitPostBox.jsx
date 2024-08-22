import React from 'react'
import style from './SubmitPostBox.module.css'


export default function SubmitPostBox(props) {
  
  let newPostElement = React.createRef();


  let addPost=()=>{
    debugger
    let text = newPostElement.current.value
    props.addPost(text);
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