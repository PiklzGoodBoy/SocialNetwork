import React from 'react'
import style from './SubmitPostBox.module.css'
import { addPostActionCreator,updateNewPostActionCreator } from '../../../../../../redux/state';

export default function SubmitPostBox(props) {


  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator())
    // props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value
    let action = updateNewPostActionCreator(text);
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