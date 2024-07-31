import React from 'react'
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.DialogsItems + '' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let DialogsData = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Masha' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Anton' },
        { id: 5, name: 'Baton' }
    ]


    let MessagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Welcome to Abab' },
        { id: 3, message: 'WTF?' },
        { id: 4, message: 'He he he' },
        { id: 5, message: 'Wou' }
    ]

    let dialogsElements = DialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let MessagesElement = MessagesData
        .map(mess => <Message message={mess.message} />)

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

export default Dialogs