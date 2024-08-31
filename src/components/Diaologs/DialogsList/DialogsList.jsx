import React from 'react'
import style from './DialogsList.module.css'
import DialogLink from './DialogLink/DialogLink'

export default function DialogsList(props) {
    let dialogsElement = props.state.dialogsPage.dialogs.map(d => <DialogLink key={d.id} name={d.name} id={d.id} />);
    
    return (
        <div className={style.DialogsList}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
        </div>
    )
}
