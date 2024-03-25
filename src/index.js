import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

import './assets/css/reset.less'
import './assets/css/index.less'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
        <Provider store={store}>
             <BrowserRouter>
                 <App />
             </BrowserRouter>
        </Provider>
);
