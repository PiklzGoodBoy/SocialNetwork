const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGES_BODY = 'UPDATE-NEW-MESSAGES-BODY';
const SEND_MESSAGES = 'SEND-MESSAGES';



export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
      ],
      newPostText: ['it-kamasutra.com']
    },
    dialogsPage: {
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
        { id: 5, message: 'Yo' }
      ],
      newMessagesBody: ['Messages']
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { // (type:'ADD-POST')
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
    }
    else if (action.type === SEND_MESSAGES) {
      let newMessages = {
        id: 5,
        message: this._state.dialogsPage.newMessagesBody,
      }
      this._state.dialogsPage.messages.push(newMessages);
      this._state.dialogsPage.newMessagesBody = '';
      this._callSubscriber(this._state)
    }
    else if (action.type === UPDATE_NEW_MESSAGES_BODY) {
      this._state.dialogsPage.newMessagesBody = action.body
      this._callSubscriber(this._state)
    }
  }

}


export const addPostCreator = () => ({ type: ADD_POST })

export const updateNewPostCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const updateMessagesCreator = (text) => ({ type: UPDATE_NEW_MESSAGES_BODY, body: text })
export const sendMessagesCreator = () => ({ type: SEND_MESSAGES })


window.state = store;


export default store;
