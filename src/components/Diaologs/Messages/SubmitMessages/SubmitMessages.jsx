import React from 'react'
import style from './SubmitMessages.module.css'
import { addMessagesActionCreator,updateMessagesActionCreator } from '../../../../redux/state';

export default function SubmitMessages(props) {

  let newMessElement = React.useRef();


  let addMess = () => {
    props.dispatch(addMessagesActionCreator())
  }

  let onMessCahnge=()=>{
    let text = newMessElement.current.value
    let action = updateMessagesActionCreator(text)
    
    props.dispatch(action)
  }

  return (
    <div className={style.SubmitMessages}>
      <textarea 
      onChange={onMessCahnge}
      ref={newMessElement}
      value={props.newMessagesText}
      ></textarea>
      <button onClick={addMess}>Add post</button>
    </div>
  )
}
