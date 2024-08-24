import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from "./app/store"; // Ensure the store is correctly imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}> {/* Wrapping the app with Provider */}
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
