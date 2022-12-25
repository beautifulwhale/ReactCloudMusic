import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import '@/assets/css/reset.css'
import '@/assets/css/global.css'
import './router/index'
import store from './store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
