import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css';
import '@/assets/css/reset.css'
import "./router/index";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
