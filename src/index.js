import React from 'react';
import ReactDOMclient from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Provider} from './StoreContext';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store';



let rerenderEntireTree = () => {

    const router = createBrowserRouter([
        {
            path: "*",
            element: <App />,
        },
    ]);

    ReactDOMclient.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

reportWebVitals();
