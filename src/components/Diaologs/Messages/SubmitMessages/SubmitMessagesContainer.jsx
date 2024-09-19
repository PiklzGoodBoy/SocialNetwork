import React from 'react'
import { sendMessagesCreator, updateMessagesCreator } from '../../../../redux/dialogs_reducer';
import SubmitMessages from './SubmitMessages';
import { connect } from 'react-redux';

// export default function SubmitMessagesContainer(props) {

//     const context = useContext(StoreContext)
//     // let newMessElement = React.useRef();
//     let storeMessages = context.getState().dialogsPage.newMessagesBody;

//     let onSendMessagesClick = () => {
//         context.dispatch(sendMessagesCreator())
//     }

//     let onNewdMessagesChange = (body) => {
//         context.dispatch(updateMessagesCreator(body))
//     }

//     return (
//         <SubmitMessages
//             updateNewMessageBody={onNewdMessagesChange}
//             sendMessages={onSendMessagesClick}
//             newMessagesBody={storeMessages}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return {
        newMessagesBody: state.dialogsPage.newMessagesBody
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessages: () => {
            dispatch(sendMessagesCreator())
        },
        updateNewMessageBody: (body) => {
            updateMessagesCreator(body)
        }
    }
}

const SubmitMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitMessages);

export default SubmitMessagesContainer;