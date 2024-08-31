import React from 'react'
import style from './Dialogs.module.css'
import DialogsList from './DialogsList/DialogsList'
import Messages from './Messages/Messages'

export default function Dialogs(props) {

    let state = props.store.getState().dialogsPage;

    return (
        <div className={style.dialogs}>

            <DialogsList state={state} />
            <Messages
                state={state}
                newMessagesBody={state.newMessagesBody}
                dispatch={props.dispatch}
            />
        </div>

    )
}
