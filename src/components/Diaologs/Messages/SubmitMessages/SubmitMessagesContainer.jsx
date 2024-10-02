import { sendMessagesCreator, updateMessagesCreator } from '../../../../redux/dialogs_reducer';
import SubmitMessages from './SubmitMessages';
import { connect } from 'react-redux';

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
            dispatch(updateMessagesCreator(body))
        }
    }
}

const SubmitMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(SubmitMessages);

export default SubmitMessagesContainer;