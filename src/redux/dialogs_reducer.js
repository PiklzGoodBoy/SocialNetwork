const UPDATE_NEW_MESSAGES_BODY = 'UPDATE-NEW-MESSAGES-BODY';
const SEND_MESSAGES = 'SEND-MESSAGES';

const dialogsReducer = (state, action) => {


    switch (action.type) {
        case SEND_MESSAGES:
            let newMessages = {
                id: 6,
                message: state.newMessagesBody,
            }
            state.messages.push(newMessages);
            state.newMessagesBody = '';
            return state;
        case UPDATE_NEW_MESSAGES_BODY:
            state.newMessagesBody = action.body
            return state;
        default:
            return state;
    }
}

export const updateMessagesCreator = (text) => ({ type: UPDATE_NEW_MESSAGES_BODY, body: text })
export const sendMessagesCreator = () => ({ type: SEND_MESSAGES })

export default dialogsReducer;