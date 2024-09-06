import React from 'react'
import style from './SubmitPostBox.module.css'

export default function SubmitPostBox(props) {


  let newPostElement = React.useRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text);
  };

  return (
    <div className={style.SubmitPostBox}>

      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <button onClick={onAddPost}>Add post</button>

    </div>
  )
}