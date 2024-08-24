import React from 'react'
import style from './SubmitPostBox.module.css'


export default function SubmitPostBox(props) {

  let newPostElement = React.createRef();


  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text);
    newPostElement.current.value = '';

  };

  // let onPostChange = ()=>{};

  return (
    <div className={style.SubmitPostBox}>

      <div>
        <textarea ref={newPostElement} value="it-kamasutra"/>
      </div>
      <button onClick={addPost}>Add post</button>

    </div>
  )
}