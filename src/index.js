import React from 'react';
import  ReactDOMclient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOMclient.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    store={store}
                    dispatch={store.dispatch.bind(store)}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

reportWebVitals();
