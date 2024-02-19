import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store/store";
import './css/bootstrap.css'
import './css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store} >
            <BrowserRouter basename='/'>
                    <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
