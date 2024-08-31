import React from 'react'
import style from './SubmitMessages.module.css'
import { sendMessagesCreator,updateMessagesCreator } from '../../../../redux/state';

export default function SubmitMessages(props) {

  // let newMessElement = React.useRef();


  let onSendMessagesClick = () => {
    props.dispatch(sendMessagesCreator())
  }

  let onNewdMessagesChange=(e)=>{
    let text = e.target.value
    props.dispatch(updateMessagesCreator(text))
    
    // let action = updateMessagesCreator(text)
    // props.dispatch(action)
  }

  return (
    <div className={style.SubmitMessages}>
      <textarea 
      onChange={onNewdMessagesChange}
      // ref={newMessElement}
      value={props.newMessagesBody}
      ></textarea>
      <button onClick={onSendMessagesClick}>Add post</button>
    </div>
  )
}
