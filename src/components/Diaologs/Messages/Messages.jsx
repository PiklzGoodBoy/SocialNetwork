import React from 'react'
import Message from './Message/Message'
import style from './Messages.module.css'
import SubmitMessagesContainer from './SubmitMessages/SubmitMessagesContainer'
import { connect } from 'react-redux'


function Messages(props) {
    let MessagesElement = props.state.map(m => <Message key={m.id} message={m.message} />);

    return (
        <div className={style.message}>
            <div className={style.messages}>
                {MessagesElement}
            </div>
            <SubmitMessagesContainer
                store={props.store}
            />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage.messages
    }
}

const MessagesContainer = connect(mapStateToProps)(Messages);
export default MessagesContainer;