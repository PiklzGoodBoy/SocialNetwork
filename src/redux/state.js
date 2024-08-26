import { renderEntireTree } from "../render";


let state = {

  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likeCount: 11 },
      { id: 2, message: "It's my firtst project", likeCount: 12 }
    ],
    newPostText:'it-kamasutra'
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Masha' },
      { id: 3, name: 'Sasha' },
      { id: 4, name: 'Anton' },
      { id: 5, name: 'Baton' },
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'Welcome to Abab' },
      { id: 3, message: 'WTF?' },
      { id: 4, message: 'He he he' },
      { id: 5, message: 'Wou' },
    ]
  }
}

window.state=state;


export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCont: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText=''; 
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export default state;