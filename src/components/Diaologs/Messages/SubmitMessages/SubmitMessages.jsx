import React from 'react'
import style from './SubmitMessages.module.css'

export default function SubmitMessages(props) {

  let newMessElement = React.createRef();
  let addMess = () => {
    let text = newMessElement.current.value;
    alert(text)
  }

  return (
    <div className={style.SubmitMessages}>
      <textarea ref={newMessElement}></textarea>
      <button onClick={addMess}>Add post</button>
    </div>
  )
}
