import {React,useContext} from 'react'
import style from './DialogsList.module.css'
import DialogLink from './DialogLink/DialogLink'
import StoreContext from '../../../StoreContext'

export default function DialogsList(props) {
    const context = useContext(StoreContext)

    let store = context.getState().dialogsPage
    let dialogsElement = store.dialogs.map(d => <DialogLink key={d.id} name={d.name} id={d.id} />);

    return (
        <div className={style.DialogsList}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
        </div>
    )
}
