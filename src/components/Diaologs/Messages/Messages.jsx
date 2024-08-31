import React from 'react'
import Message from './Message/Message'
import style from './Messages.module.css'
import SubmitMessages from './SubmitMessages/SubmitMessages'


export default function Messages(props) {

    let MessagesElement = props.state.dialogsPage.messages
        .map(m => <Message key={m.id} message={m.message} />)

    return (
        <div className={style.message}>
            <div className={style.messages}>
                {MessagesElement}
            </div>
            <SubmitMessages
                newMessagesText={props.newMessagesText}
                dispatch={props.dispatch}
            />
        </div>
    )
}