import React from 'react'
import style from './Dialogs.module.css'
import DialogLink from './DialogLink/DialogLink'
// import Message from './Messages/Message/Message'
import Messages from './Messages/Messages'

export default function Dialogs(props) {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogLink key={d.id} name={d.name} id={d.id} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                {dialogsElements}
            </div>
            <Messages state={props.state}/>
        </div>

    )
}
