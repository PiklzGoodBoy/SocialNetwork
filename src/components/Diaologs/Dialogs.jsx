import React from 'react'
import style from './Dialogs.module.css'
import DialogsList from './DialogsList/DialogsList'
import Messages from './Messages/Messages'

export default function Dialogs(props) {
    return (
        <div className={style.dialogs}>

            <DialogsList />
            <Messages

            // newMessagesBody={state.newMessagesBody}
            // dispatch={props.dispatch}
            />
        </div>

    )
}
