import React from 'react'
import style from './SubmitPostBox.module.css'


export default function SubmitPostBox(props) {

  let newPostElement = React.createRef();


  let addPost = () => {
    debugger
    props.addPost();
    // props.updateNewPostText('');
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
      <button onClick={addPost}>Add post</button>

    </div>
  )
}