import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Store/index.jsx'
import { ThemeProvider } from './Store/Context/ThemContext.jsx'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider>

    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
  </BrowserRouter>

)
