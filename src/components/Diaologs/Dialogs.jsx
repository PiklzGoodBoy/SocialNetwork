import React from 'react'
import style from './Dialogs.module.css'
import DialogsList from './DialogsList/DialogsList'
import Messages from './Messages/Messages'

export default function Dialogs(props) {

    return (
        <div className={style.dialogs}>

            <DialogsList state={props.state} />
            <Messages
                state={props.state}
                newMessagesText={props.state.dialogsPage.newMessagesText}
                dispatch={props.dispatch}
            />
        </div>

    )
}
