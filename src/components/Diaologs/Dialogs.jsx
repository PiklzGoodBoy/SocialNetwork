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

const Message = (props, message) => {
    <div className={style.dialog}>{message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_items}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Masha" id="2" />
                <DialogItem name="Sasha" id="3" />
                <DialogItem name="Anton" id="4" />
                <DialogItem name="Baton" id="5" />
            </div>
            <div className={style.messages}>
                <Message message="Hi" />
                <Message message="Ch cH CH ch" />
                <Message message="You" />
                <Message message="You" />
                <Message message="You" />
            </div>
        </div>

    )
}

export default Dialogs