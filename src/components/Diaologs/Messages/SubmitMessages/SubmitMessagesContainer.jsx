import { updateMessagesCreator, updateNewMessagesBody } from '../../../../redux/dialogs_reducer';
import SubmitMessages from './SubmitMessages';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newMessagesBody: state.dialogsPage.newMessagesBody
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         sendMessages: () => {
//             dispatch(updateMessagesCreator())
//         },
//         updateNewMessageBody: (body) => {
//             dispatch(updateNewMessagesBody(body))
//         }
//     }
// }
export default connect(mapStateToProps, {updateMessagesCreator,updateNewMessagesBody})(SubmitMessages);
