import React, { useContext } from 'react'
import Message from './Message/Message'
import style from './Messages.module.css'
import SubmitMessagesContainer from './SubmitMessages/SubmitMessagesContainer'
import StoreContext from '../../../StoreContext';


export default function Messages(props) {
    const context = useContext(StoreContext);

    let store = context.getState().dialogsPage.messages
    let MessagesElement = store.map(m => <Message key={m.id} message={m.message} />)

    return (
        <div className={style.message}>
            <div className={style.messages}>
                {MessagesElement}
            </div>
            <SubmitMessagesContainer />
        </div>
    )
}