import React from 'react'
import style from './SubmitMessages.module.css'

export default function SubmitMessages(props) {
  // let newMessElement = React.useRef();
  let onSendMessagesClick = () => {
    props.updateMessagesCreator()
  }

  let onNewdMessagesChange = (e) => {
    let body = e.target.value
    props.updateNewMessagesBody(body)
  }

  return (
    <div className={style.SubmitMessages}>
      <textarea
        placeholder="Your message"
        onChange={onNewdMessagesChange}
        value={props.newMessagesBody}
      ></textarea>
      <button onClick={onSendMessagesClick}>Add post</button>
    </div>
  )
}
