import React from 'react'
import style from './Dialogs.module.css'
import DialogLink from './DialogLink/DialogLink'
import Message from './Message/Message'

export default function Dialogs(props) {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogLink key={d.id} name={d.name} id={d.id} />);

    let MessagesElement = props.state.messages
        .map(m => <Message key={m.id} message={m.message} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {MessagesElement}
            </div>
        </div>

    )
}
