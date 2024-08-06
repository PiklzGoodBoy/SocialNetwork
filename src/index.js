import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: "Hi, how are you?", likeCount: 11 },
  { id: 2, message: "It's my firtst project", likeCount: 12 }
]

let DialogsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Masha' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Anton' },
  { id: 5, name: 'Baton' },
  { id: 6, name: 'Vosik' }
]

let MessagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Welcome to Abab' },
  { id: 3, message: 'WTF?' },
  { id: 4, message: 'He he he' },
  { id: 5, message: 'Wou' },
  { id: 5, message: 'You Boy' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} DialogsData={DialogsData} MessagesData={MessagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
