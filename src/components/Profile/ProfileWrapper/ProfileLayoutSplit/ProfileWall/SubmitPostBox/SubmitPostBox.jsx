import React from 'react'
import style from './SubmitPostBox.module.css'

export default function SubmitPostBox(props) {
  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let text = e.target.value
    props.updateNewPostText(text);
  };

  return (
    <div className={style.SubmitPostBox}>

      <div>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
        />
      </div>
      <button onClick={onAddPost}>Add post</button>
    </div>
  )
}
