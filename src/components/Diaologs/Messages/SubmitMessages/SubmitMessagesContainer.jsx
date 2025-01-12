import { update_messages_creator, update_new_messages_body } from '../../../../redux/dialogs_reducer';
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
            dispatch(update_messages_creator())
        },
        updateNewMessageBody: (body) => {
            dispatch(update_new_messages_body(body))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubmitMessages);
