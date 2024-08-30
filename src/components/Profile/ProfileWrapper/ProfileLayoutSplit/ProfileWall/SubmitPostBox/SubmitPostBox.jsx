import React, { act } from 'react'
import style from './SubmitPostBox.module.css'
import { type } from '@testing-library/user-event/dist/type';


export default function SubmitPostBox(props) {

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.addPost();
    props.dispatch({ type: 'ADD-POST' })
  };

  let onPostChange = () => {
    let text = newPostElement.current.value
    // props.updateNewPostText(text);
    let action = { type: 'UPDATE-NEW-POST-TEXT', newText:text };
    props.dispatch(action)

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
      <button onClick={addPost}>Add post</button>

    </div>
  )
}