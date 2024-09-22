const UPDATE_NEW_MESSAGES_BODY = 'UPDATE-NEW-MESSAGES-BODY';
const SEND_MESSAGES = 'SEND-MESSAGES';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Ha' }
    ],
    newMessagesBody: 'Messages'
}

const dialogsReducer = (state = initialState, action) => {

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