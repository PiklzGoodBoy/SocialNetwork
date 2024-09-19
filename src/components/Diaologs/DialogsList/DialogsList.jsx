import React from 'react'
import style from './DialogsList.module.css'
import DialogLink from './DialogLink/DialogLink'
import { connect } from 'react-redux'

function DialogsList(props) {
    let dialogsElement = props.state.dialogs.map(d => <DialogLink key={d.id} name={d.name} id={d.id} />);

    return (
        <div className={style.DialogsList}>
            <div className={style.dialogs_items}>
                {dialogsElement}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer;