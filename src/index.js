// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Use this for React 18 and above
import './styles.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// For React 18 and above, use createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
