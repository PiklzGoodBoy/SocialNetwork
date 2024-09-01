import React from 'react'
import style from './SubmitPostBox.module.css'
import { addPostCreator,updateNewPostCreator } from '../../../../../../redux/profile_reducer';

export default function SubmitPostBox(props) {


  let newPostElement = React.useRef();

  let addPost = () => {
    props.dispatch(addPostCreator())
    // props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value
    let action = updateNewPostCreator(text);
    // props.updateNewPostText(text);
    // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };

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