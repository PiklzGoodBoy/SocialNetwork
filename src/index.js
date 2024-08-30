import React from 'react';
import * as ReactDOMclient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOMclient.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <React.StrictMode>
                <App  state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
            </React.StrictMode>
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();



// Create *and* render a root with hydration.
