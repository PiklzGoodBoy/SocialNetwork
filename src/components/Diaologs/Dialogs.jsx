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
    
    let MessageData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Welcome to Abab' },
        { id: 3, message: 'WTF?' },
        { id: 4, message: 'He he he' }
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name="Sasha" id="3" />
                <DialogItem name="Anton" id="4" />
                <DialogItem name="Baton" id="5" />
            </div>
            <div className={style.messages}>
                <Message message={MessageData[0].message} />
                <Message message={MessageData[1].message} />
                <Message message="You" />
                <Message message="You" />
                <Message message="You" />
            </div>
        </div>

    )
}

export default Dialogs