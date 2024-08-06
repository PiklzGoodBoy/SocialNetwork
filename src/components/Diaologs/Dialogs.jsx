import React from 'react'
import style from './Dialogs.module.css'
import DialogLink from './DialogLink/DialogLink'
import  Message  from './Message/Message'

function Dialogs  (props)  {
    let DialogsData = [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Masha' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Anton' },
            { id: 5, name: 'Baton' }
        ]
    // console.log(props.name)
        // debugger
        let MessagesData = [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Welcome to Abab' },
                { id: 3, message: 'WTF?' },
                { id: 4, message: 'He he he' },
                { id: 5, message: 'Wou' }
            ]
            
            let dialogsElements = DialogsData
            .map(d => <DialogLink key={d.id} name={d.name} id={d.id} />);
            
            let MessagesElement = MessagesData
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

export default Dialogs