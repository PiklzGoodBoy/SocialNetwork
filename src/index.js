import { React, StrictMode } from 'react';
import ReactDOMclient from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux_store';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';


const router = createBrowserRouter([
    {
        path: "*",
        element: <App />,
    },
]);

ReactDOMclient.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);

reportWebVitals();
