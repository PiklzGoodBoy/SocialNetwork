import React from 'react'
import style from './Dialogs.module.css'
import DialogLink from './DialogLink/DialogLink'
import  Message  from './Message/Message'

function Dialogs  (props)  {
    
            console.log(props.DialogsData)
            let dialogsElements = props.DialogsData
            .map(d => <DialogLink key={d.id} name={d.name} id={d.id} />);
            
            let MessagesElement = props.MessagesData
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