import React from 'react'
import Message from './Message/Message'
import style from './Messages.module.css'
import SubmitMessagesContainer from './SubmitMessages/SubmitMessagesContainer'


export default function Messages(props) {
    let state = props.store.getState().dialogsPage.messages
    let MessagesElement = state.map(m => <Message key={m.id} message={m.message} />)

    return (
        <div className={style.message}>
            <div className={style.messages}>
                {MessagesElement}
            </div>
            <SubmitMessagesContainer
                store={props.store}
            />
        </div>
    )
}