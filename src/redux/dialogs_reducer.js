import { createSlice } from '@reduxjs/toolkit'

export const dialogsSLcie = createSlice({
  name: 'dialogs',
  initialState: {
    dialogs: [
      {
        id: 1, photoURL: 'https://images.unsplash.com/photo-1727731481816-bf055858e20f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Dimych"
      },
      {
        id: 2, photoURL: 'https://images.unsplash.com/photo-1727731481816-bf055858e20f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Andrew"
      },
      {
        id: 3, photoURL: 'https://images.unsplash.com/photo-1727731481816-bf055858e20f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Sveta"
      },
      {
        id: 4, photoURL: 'https://images.unsplash.com/photo-1727731481816-bf055858e20f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Sasha"
      },
      {
        id: 5, photoURL: 'https://images.unsplash.com/photo-1727731481816-bf055858e20f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Viktor"
      },
      {
        id: 6, photoURL: 'https://images.unsplash.com/photo-1727731481816-bf055858e20f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Valera"
      },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your it-kamasutra?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Ha" },
    ],
    newMessagesBody: "",
  },
  reducers: {
    update_messages_creator: (state, action) => {
      let newMessages = {
        id: 6,
        message: state.newMessagesBody,
      };
      return {
        ...state,
        newMessagesBody: "",
        messages: [...state.messages, newMessages],
      };
    },
    update_new_messages_body: (state, action) => {
      return {
        ...state,
        newMessagesBody: [action.payload]
      }
    }
  }
});

export const { update_messages_creator, update_new_messages_body } = dialogsSLcie.actions
export default dialogsSLcie.reducer;