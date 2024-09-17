import {React,useContext} from 'react'
import { sendMessagesCreator, updateMessagesCreator } from '../../../../redux/dialogs_reducer';
import SubmitMessages from './SubmitMessages';
import StoreContext from '../../../../StoreContext';

export default function SubmitMessagesContainer(props) {
    
    const context = useContext(StoreContext)
    // let newMessElement = React.useRef();
    let storeMessages = context.getState().dialogsPage.newMessagesBody;

    let onSendMessagesClick = () => {
        context.dispatch(sendMessagesCreator())
    }

    let onNewdMessagesChange = (body) => {
        context.dispatch(updateMessagesCreator(body))
    }

    return (
        <SubmitMessages
            updateNewMessageBody={onNewdMessagesChange}
            sendMessages={onSendMessagesClick}
            newMessagesBody={storeMessages}
        />
    )
}
