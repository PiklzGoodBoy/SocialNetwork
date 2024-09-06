import React from 'react'
import { sendMessagesCreator, updateMessagesCreator } from '../../../../redux/dialogs_reducer';
import SubmitMessages from './SubmitMessages';

export default function SubmitMessagesContainer(props) {
    // let newMessElement = React.useRef();
    let state = props.store.getState().dialogsPage.newMessagesBody;

    let onSendMessagesClick = () => {
        props.store.dispatch(sendMessagesCreator())
    }

    let onNewdMessagesChange = (body) => {
        props.store.dispatch(updateMessagesCreator(body))

        // let action = updateMessagesCreator(text)
        // props.dispatch(action)
    }

    return (
        <SubmitMessages 
            updateNewMessageBody={onNewdMessagesChange}
            sendMessages={onSendMessagesClick}
            newMessagesBody={state}
        />
    )
}
